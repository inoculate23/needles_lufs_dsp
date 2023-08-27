'use strict';

var tape = require('tape');

function testFactory (before, after) {
  before = before || (() => {});
  after = after || (() => {});
  return function (name, fn) {
    tape(name, (t) => {
      before(t);
      fn(t);
      after(t);
    });
  }
}

exports.testFactory = testFactory;
