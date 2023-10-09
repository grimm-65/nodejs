import db from './utils/dbSetup.js';

let data;

//using import instead of require
//const db = require('./utils/dbSetup.js');


//const fetch = require('node-fetch');
import fetch from 'node-fetch';


db.loadDatabase((err) =>{
	if (err) throw err;
	console.log('NeDB is successfully working');
});


async function getData(){
	
	try {
		const response = await fetch('https://random-data-api.com/api/v2/banks');
		data = await response.json();
		console.log(data);

		db.insert(data, (err, newDoc)=>{
			if(err){
				console.error('Error insering data into NeDB', err);
			}else{
				console.log('Data inserted successfully', newDoc);
			}
		});

	}catch (error){
		console.log(error);
	}


}
getData();

console.log(data);