
const assert = require('assert');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const app = require('../exit-exam-practice/exit-practice-1.js');
const stdout = require("test-console").stdout;
const stderr = require("test-console").stderr;
const sinon = require('sinon');

describe('test', function(){
  it('should add values correctly', function(){
    assert.equal(app.add(2, 4), 6);
  });
});
