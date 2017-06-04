class Person {
	constructor(name){
		this.name = typeof name === 'string' ? name : 'anonymous';
	}

	// set method
	set name (val) {
		this._name = Person.capitalizeWord(val);
	}

	// get method
	get name () {
		return this._name;
	}

	printGreeting(){
		console.log(`Hi, I am ${this.name}!`);
	}

	static capitalizeWord(word) {
		return word[0].toUpperCase() + word.slice(1);
	}
}

var person1 = new Person();
person1.printGreeting();

var person2 = new Person('andrew');
person2.printGreeting();

person2.name = 'jen'
person2.printGreeting();

console.log('--------------------');

var obj = {
	set age(val) {
		this._age = val + 10;
	},
	get age() {
		return this._age;
	}
}

obj.age = 21;
console.log(obj.age);


