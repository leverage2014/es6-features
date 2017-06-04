var locations = [];

locations.push({
	name: 'PA',
	weather: 22
});

locations.push({
	name: 'CA',
	weather: 52
});

for (let location of locations) {
	console.log(`It's ${location.weather} in ${location.name}`);
}

console.log('------------------------');

function averageGrade(...numbers){
	var result = 0;

	for (let number of numbers) {
		result += number;
	}

	return result / numbers.length;
}

var avg = averageGrade(1, 44, 99);
console.log(`Avg is ${avg}`);