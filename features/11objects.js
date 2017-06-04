var age = 25;
function printHello() {
	console.log('Hello');
}

var person = {
	name: 'Andrew',
	age,
	printHello,
	['hello' + ( 3+2 )]: 'I am here',
	['hello' + ( age + 2 )]: 'You are there',
	printAge () {
		console.log(this.age);
	}
};

console.log( person.age );
console.log( person.hello5 );
console.log( person.hello27 );
person.printHello();
person.printAge();