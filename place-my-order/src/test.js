import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'project-x/models/test';

F.attach(QUnit);

QUnit.module('project-x functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('project-x main page shows up', function() {
  F('title').text('project-x', 'Title is set');
});
