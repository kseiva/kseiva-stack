'use strict'

const assert = require('assert');

function Stack() {
	this.top = null;
	this.size = 0;
};

function Node(value) {
	this.value = value;
	this.previous = null;
};

Stack.prototype.push = function(value) {
  	var newNode = new Node(value);
  	if (value != null) {
  		newNode.next = this.top; 
  		this.top = newNode;
  		this.size += 1;
		return this.top;
  	}
  	assert(arguments.lenght == 1, 'Should pass a non-empty variable');
}

Stack.prototype.pop = function() {

  	var topItem = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return topItem;
}

Stack.prototype.print = function() {
  var curr = this.top;
  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}

Stack.prototype.peek = function() {
	if (this.top == null) {
		return null;
	} else {
		return console.log(this.top.value);
	}
};

Stack.prototype.isEmpty = function() {
	if (this.top === null || typeof this.top == 'undefined') {
		return true;
	}
	return false;
}

module.exports = Node;
module.exports = Stack;











