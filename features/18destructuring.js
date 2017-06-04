var arr = ['first', 'second', 'third'];
var [a1,b1,c1] = arr;
var [a2,,c2] = arr;

console.log(a1, b1, c1);
console.log(a2, c2);

console.log('-----------------------------');

var todo = {
	description: 'watch TV',
	completed: false
}

var { description, completed } = todo;
var { description: message } = todo; // rename

console.log(description, completed);
console.log(message);

console.log('-----------------------------');

function getTodoStatus ({ completed }) {
	if (typeof completed === 'boolean') {
		return [ `Todo is ${completed ? '' : 'not'} completed` ];
	} else {
		return [undefined, {error: 'INVALID_TODO_ITEM'}];
	}
}

var [res, err] = getTodoStatus(todo);
console.log(res, err);
