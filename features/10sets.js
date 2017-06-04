var chatRoom = new Set();

// add
chatRoom.add('Runners');
chatRoom.add('Runners');
chatRoom.add('Bikers');

// size
console.log( chatRoom.size );

// has
console.log( `Does the set has Runners: ${chatRoom.has('Runners')}`);

// delete
// chatRoom.delete('Bikers');
// console.log(chatRoom.size);

// chatRoom.clear();
// console.log(chatRoom.size);

// To array
console.log( [...chatRoom] );

chatRoom.add({name: 'Andrew'});
console.log( [...chatRoom] );

chatRoom.forEach( (item) => {
	console.log(`In room: ${item}`);
});



