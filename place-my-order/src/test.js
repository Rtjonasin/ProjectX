import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'prjoect-x/models/test';

F.attach(QUnit);

QUnit.module('prjoect-x functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('prjoect-x main page shows up', function() {
  F('title').text('prjoect-x', 'Title is set');
});
