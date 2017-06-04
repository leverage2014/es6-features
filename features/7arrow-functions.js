var names = ['Andrew', 'Vikram', 'John', 'Audra'];

names.forEach(name => console.log(name));

var add = (a, b) => a + b;

console.log( add(1, 3) );

console.log('------------------------');

var person1 = {
	name: 'Andrew1',
	likes: ['Movie', 'Programming', 'Running'],
	generateGreeter: function(){
		return function(){
			console.log(this.name);
		}
	}
}

// person1.generateGreeter()(); // Error

var person2 = {
	name: 'Andrew2',
	likes: ['Movie', 'Programming', 'Running'],
	generateGreeter: function(){
		var that = this;

		return function(){
			console.log(that.name);
		}
	}
}
person2.generateGreeter()();

var person3 = {
	name: 'Andrew3',
	likes: ['Movie', 'Programming', 'Running'],
	generateGreeter: function(){
		return () => {
			console.log(this.name);
		}
	}
}
person3.generateGreeter()();




