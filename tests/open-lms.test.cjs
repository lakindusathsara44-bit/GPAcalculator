const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync('open-lms-data.js', 'utf8');
const context = { window: {} };
vm.runInNewContext(source, context);
const data = context.window.OPEN_LMS_DATA;

test('includes all 15 HND programmes and their module catalogues', () => {
  assert.equal(data.courses.length, 15);
  for (const course of data.courses) {
    assert.ok(course.id && course.name);
    assert.ok(Array.isArray(course.modules));
    assert.ok(course.modules.length > 0);
    for (const module of course.modules) assert.ok(module.code && module.name);
  }
});

test('module codes are unique within each course', () => {
  for (const course of data.courses) {
    const keys = course.modules.map(m => m.code.toLowerCase());
    assert.equal(new Set(keys).size, keys.length, course.id);
  }
});

test('resource priorities, source types and URLs are valid', () => {
  for (const course of data.courses) for (const module of course.modules) {
    for (const resource of module.resources || []) {
      assert.ok([1, 2, 3].includes(resource.priority));
      assert.ok(resource.priorityReason);
      assert.ok(['curated', 'discovery'].includes(resource.sourceType));
      assert.match(resource.url, /^https:\/\//);
    }
  }
});

test('all modules expose discovery links without claiming audited LMS gaps', () => {
  for (const course of data.courses) for (const module of course.modules) {
    assert.ok((module.resources || []).some(r => r.sourceType === 'discovery'));
    assert.equal(module.lmsGapVerified, false);
  }
});

test('curated platform entries are explicitly classified and linked', () => {
  assert.ok(data.sources.length >= 5);
  for (const resource of data.sources) {
    assert.equal(resource.sourceType, 'curated');
    assert.ok(Array.isArray(resource.courseIds) && resource.courseIds.length > 0);
    assert.match(resource.url, /^https:\/\//);
  }
});

test('inline page script parses without syntax errors', () => {
  const html = fs.readFileSync('open.lms.html', 'utf8');
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  assert.ok(scripts.length > 0);
  assert.doesNotThrow(() => new vm.Script(scripts[scripts.length - 1][1]));
});

test('page includes accessible search and priority/resource filters', () => {
  const html = fs.readFileSync('open.lms.html', 'utf8');
  for (const id of ['courseSelect', 'moduleSearch', 'priorityFilter', 'typeFilter', 'resourceList']) {
    assert.match(html, new RegExp('id="' + id + '"'));
  }
});

test('all three study-priority levels are represented', () => {
  const levels = new Set(data.courses.flatMap(course => course.modules.flatMap(module => (module.resources || []).map(resource => resource.priority))));
  assert.deepEqual([...levels].sort(), [1, 2, 3]);
});

test('discovery and curated resources are clearly distinguished and linked from home', () => {
  const html = fs.readFileSync('open.lms.html', 'utf8');
  const home = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /Discovery search/);
  assert.match(html, /Curated platform/);
  assert.match(html, /priorityFilter/);
  assert.match(html, /typeFilter/);
  assert.match(home, /href="open\.lms\.html"/);
});
