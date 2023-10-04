const events = require('events');

element.on('click', function(){
	console.log('Click click');
});

//	CUSTOM EVENTS

const myEmitter = new events();

myEmitter.on('customEvent', function(msg){
	console.log(msg);
});

myEmitter.emit('customEvent','This custom event working');
