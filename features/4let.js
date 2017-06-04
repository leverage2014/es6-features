var x = 0;

if (true) {
	var x = 12;
	console.log(x);
}

console.log(x);

console.log('--------------------------');

let X = 0;

if (true) {
	let X = 12;
	console.log(X);
}

console.log(X);

console.log('--------------------------');

for (var i = 0; i < 3; i++){
	console.log(`For loop: i = ${i}`);
}
console.log(i);

for (let j = 0; j < 3; j++){
	console.log(`For loop: j = ${j}`);
}
// console.log(j);  ==> Error: undefined

console.log('--------------------------');

function genCallback(){
	let name = 'Mike';
	return function(){
		console.log(`Hello ${name} !!`);
	}
}

genCallback()();


