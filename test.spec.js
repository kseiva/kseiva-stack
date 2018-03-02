'use strict';

const assert = require('assert');
const Node = require('./index.js');
const Stack = require('./index.js');

describe('kseiva-stack', function () {
	var stack = new Stack();

	it('should add element in stack', function () {
		stack.push(5);
		stack.push(3);
		stack.push(1);

		assert.throws(function () {
			stack.push(null);
		}, 'Element for stack is undefined');
	});

	it('should print stack', function() {
		stack.print();
	})

	it('should peek element', function() {
		stack.peek();
	})

	it('should delete element(s) from stack', function() {

		assert(!stack.isEmpty(), 'Stack should have at least one argument')
		stack.pop();
		stack.pop();
		stack.pop();
	})

	it('should delete element(s) from empty stack', function() {

		assert(!stack.isEmpty(), 'Stack should have at least one argument')
		stack.pop();
	})
});