const request = require('request');

console.log('Starting')

//Wait 2 sec before running the function

//SetTimeout takes 2 args callback function  and time to wait in mms
setTimeout(()=>{
	console.log('2 sec timer');
}, 2000);

console.log('Stopping');

const url = 'https://jsonplaceholder.typicode.com/todos/1'

request({url:url}, (error, response)=>{
	const data = JSON.parse(response.body);

	console.log(data)
})

