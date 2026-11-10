const test = require('node:test');
const assert = require('node:assert/strict');
const catalog = require('../open-lms-data.js');

test('includes all 15 HND programmes and LMS-listed module counts', () => {
  assert.equal(catalog.courses.length, 15);
  const expected = {HNDA:40,HNDBA:27,HNDBF:27,HNDBSE:40,'HNDE-Civil':27,'HNDE-Electrical':34,'HNDE-Mechanical':31,'HND-English':32,HNDFT:20,HNDIT:31,HNDM:40,HNDPM:20,HNDQS:29,'HNDT-Agri':31,HNDTHM:34};
  for (const [id, count] of Object.entries(expected)) {
    const course = catalog.courses.find(item => item.id === id);
    assert.ok(course, id + ' exists');
    assert.equal(course.modules.length, count, id + ' module count');
  }
});

test('every module has a source-backed code and title', () => {
  for (const course of catalog.courses) {
    for (const module of course.modules) {
      assert.ok(module.code && module.name);
      assert.equal(module.source, 'repository-lms-directory');
    }
  }
});

test('curated resources require a real URL and a valid priority', () => {
  for (const course of catalog.courses) for (const module of course.modules) {
    for (const resource of module.resources || []) {
      assert.equal(resource.kind, 'curated');
      assert.match(resource.url, /^https:\/\//);
      assert.ok([1,2,3].includes(resource.priority));
      assert.ok(resource.priorityReason);
    }
  }
});

test('module search and resource filters are deterministic', () => {
  assert.equal(catalog.filterModules('HNDIT', 'web design').length, 1);
  assert.equal(catalog.filterModules('HNDIT', 'no-such-topic').length, 0);
  const all = catalog.getResources('HNDIT', 'HNDIT1022');
  assert.ok(all.some(resource => resource.kind === 'discovery'));
  assert.ok(all.every(resource => [1,2,3].includes(resource.priority)));
  assert.ok(catalog.filterResources(all, {type:'video', priority:'1'}).every(resource => resource.type === 'video' && resource.priority === 1));
});
