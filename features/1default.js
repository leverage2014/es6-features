// babel-node ./features/default.js --presets es2015 (without .babelrc file)
// babel-node ./features/default.js (with .babelrc file)

// nodemon --exec babel-node ./features/default.js

function sayHello(name = 'world'){
	console.log('Hello ' + name + '!');
}

sayHello();
sayHello('Kate');

function greetUser (user = {name: 'Anonymouse'}) {
	console.log('Hello ' + user.name + '!');
}

greetUser();
greetUser({name: 'John'});