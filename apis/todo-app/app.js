const express = require('express');
const bodyParser = require('body-parser');
require ('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

//const port = process.env.PORT;

const port = 9701;

app.use(express.urlencoded({extended: true}));


app.get('/', (req,res)=>{
	res.json({"Message":"Welcome to todo app Youre one stop for all youre saving needs"});
});



require('./routes/todo.routes.js');


app.listen(port, ()=>{
	console.log(`Server is listening on port ${port}`);
});