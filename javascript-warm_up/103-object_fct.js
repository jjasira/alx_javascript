// File: 103-object_fct.js
#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12,
  incr: function () {
    this.value++;
  }
};

console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);