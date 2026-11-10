const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
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

test('every module has a code, title, and discovery resources', () => {
  for (const course of catalog.courses) {
    for (const module of course.modules) {
      assert.ok(module.code && module.name);
      assert.equal(module.resources.length, 2);
      assert.ok(module.resources.every(resource => resource.sourceType === 'discovery'));
      assert.ok(module.resources.every(resource => /^https:\/\//.test(resource.url)));
      assert.ok(module.resources.every(resource => [1,2,3].includes(resource.priority) && resource.priorityReason));
    }
  }
});

test('curated learning portals are attributable and have valid priorities', () => {
  assert.ok(catalog.sources.length >= 5);
  for (const resource of catalog.sources) {
    assert.equal(resource.sourceType, 'curated');
    assert.match(resource.url, /^https:\/\//);
    assert.ok([1,2,3].includes(resource.priority));
    assert.ok(resource.reason && resource.provider);
  }
});

test('module search and resource filters are deterministic', () => {
  assert.equal(catalog.filterModules('HNDIT', 'web design').length, 1);
  assert.equal(catalog.filterModules('HNDIT', 'no-such-topic').length, 0);
  const all = catalog.getResources('HNDIT', 'HNDIT1022');
  assert.ok(all.some(resource => resource.sourceType === 'discovery'));
  assert.ok(all.some(resource => resource.sourceType === 'curated'));
  assert.ok(all.every(resource => [1,2,3].includes(resource.priority)));
  assert.ok(catalog.filterResources(all, {type:'Video lessons', priority:'1'}).every(resource => resource.type === 'Video lessons' && resource.priority === 1));
  const priorities = new Set(catalog.courses.flatMap(course => course.modules.flatMap(module => module.resources.map(resource => resource.priority))));
  assert.deepEqual([...priorities].sort(), [1,2,3]);
});

test('page exposes the filters and the home page links to it', () => {
  const page = fs.readFileSync(path.join(__dirname, '..', 'open.lms.html'), 'utf8');
  const home = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  for (const id of ['courseSelect','moduleSearch','priorityFilter','typeFilter']) assert.ok(page.includes('id="'+id+'"'));
  assert.ok(page.includes('<script src="open-lms-data.js"></script>'));
  assert.ok(page.includes('Discovery search'));
  assert.ok(home.includes('href="open.lms.html"'));
});
