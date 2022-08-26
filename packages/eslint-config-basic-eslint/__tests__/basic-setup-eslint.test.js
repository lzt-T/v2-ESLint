'use strict';

const basicSetupEslint = require('..');
const assert = require('assert').strict;

assert.strictEqual(basicSetupEslint(), 'Hello from basicSetupEslint');
console.info("basicSetupEslint tests passed");
