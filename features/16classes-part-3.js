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

class Employee extends Person{
	constructor(name, job = 'Unemployed') {
		super(name);
		this.job = job;
	}

	printGreeting(){
		console.log(`Hi, I am ${this.name}! I am a ${this.job}`);
	}

	callSuperMethod(){
		super.printGreeting();
	}
}

var person1 = new Employee();
person1.printGreeting();

var person2 = new Employee('andrew', 'Programer');
person2.printGreeting();
person2.callSuperMethod();

console.log( person1 instanceof Person );
console.log( person1 instanceof Employee );



