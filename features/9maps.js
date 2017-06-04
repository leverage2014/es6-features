var myMap = new Map();

// set method
myMap.set('name', 'Andrew');

// get method
console.log( myMap.get('name') );

// has method
console.log( myMap.has('age') );
console.log( myMap.has('name') );

// delete method
myMap.set('age', 10);
myMap.delete('name');

// size method
console.log( myMap.size );

// clear
myMap.clear();
console.log( myMap.size );

// ------------ use object as key -------------
var user = {name: 'Andrew'};
myMap.set(user, 'PA');
console.log( myMap.get(user) );

// ---------------------------------------------

var myMap2 = new Map();
myMap2.set(1, 'Andrew');
myMap2.set(2, 'Jen');
myMap2.set(3, 'Ben');

console.log([...myMap2]);
console.log(myMap2.keys());
console.log(myMap2.values());
