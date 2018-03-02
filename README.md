# kseiva-stack

Stack implementation in Javascript

# How to develop

```bash
git clone .../kseiva-stack
cd kseiva-stack
npm install
```

# API

```javascript

const Stack = require('kseiva-stack');
const stack = new Stack();

stack.push(5);
stack.push(3);
stack.push(1);
stack.print(); / 1, 3, 5
stack.peek(); / 1
stack.pop();
stack.pop();
stack.pop();
stack.pop(); / Exception, stack is empty

```