const express = require('express');
const port = 6969;
const books = require('./books');
const app = express();

app.use(express.json());
app.use('api/v1/books', books);


app.listen(port, ()=>{
	console.log(`Server is listening on port ${port}`);
});