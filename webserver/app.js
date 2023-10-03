const express = require('express');
const app = express();


app.get('/', (req,res)=>{
	res.send('Hello world');

});

app.get('/weather', (req,res)=>{
	res.send({
		prediction: 'It will rain',
		Location: 'juja'
	});
});


app.listen(3000,()=>{
	console.log("Server is running on port 3000");
});	