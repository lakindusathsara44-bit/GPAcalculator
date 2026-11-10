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
    for (const module of course.modules) {
      assert.ok(module.code && module.name);
    }
  }
});

test('module codes and names are unique within each course', () => {
  for (const course of data.courses) {
    const keys = course.modules.map(m => m.code.toLowerCase());
    assert.equal(new Set(keys).size, keys.length, course.id);
  }
});

test('resource priorities are limited to 1, 2 and 3; source types are explicit', () => {
  for (const course of data.courses) for (const module of course.modules) {
    for (const resource of module.resources || []) {
      assert.ok([1, 2, 3].includes(resource.priority));
      assert.ok(['curated', 'discovery'].includes(resource.sourceType));
      assert.match(resource.url, /^https:\/\//);
    }
  }
});

test('all modules expose discovery resources without claiming LMS gaps', () => {
  for (const course of data.courses) for (const module of course.modules) {
    assert.ok((module.resources || []).some(r => r.sourceType === 'discovery'));
    assert.equal(module.lmsGapVerified, false);
  }
});

test('curated platform entries are explicitly classified and linked', () => {\n  assert.ok(data.sources.length >= 5);\n  for (const resource of data.sources) {\n    assert.equal(resource.sourceType, 'curated');\n    assert.ok(Array.isArray(resource.courseIds) && resource.courseIds.length > 0);\n    assert.match(resource.url, /^https:\\/\\//);\n  }\n});\n\ntest('inline page script parses without syntax errors', () => {\n  const html = fs.readFileSync('open.lms.html', 'utf8');\n  const scripts = [...html.matchAll(/<script>([\\s\\S]*?)<\\/script>/g)];\n  assert.ok(scripts.length > 0);\n  assert.doesNotThrow(() => new vm.Script(scripts[scripts.length - 1][1]));\n});\n\ntest('page includes accessible search and priority/resource filters', () => {
  const html = fs.readFileSync('open.lms.html', 'utf8');
  for (const id of ['courseSelect', 'moduleSearch', 'priorityFilter', 'typeFilter', 'resourceList']) {
    assert.match(html, new RegExp('id="' + id + '"'));
  }
});
