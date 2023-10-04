const mysql = require('mysql');


const connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password:'dixon@eh22',
		database:'Todo'


});


connection.connect((err)=>{
	if(err) throw err
	console.log('Successfully connected to the database');
})



exports.create =  (req, res) =>{
	if(!req.body.description){
		return res.status(400).send({
			message: "Todo description cant be empty"
		});
	}
	const params = req.body;
	console.log(params);

	connection.query("INSERT INTO todos SET ?", params,
		(error, results, fields)=>{
			if(error) throw error;
			return res.send({
				data: results,
				Message: 'New todo has been successfully created'
			});
		
	});

};
//GET ALL TODOS
exports.findAll = (req,res)=>{
	connection.query('select * from todos',(error, results, fields)=>{
		if(error) throw error;
		res.end(JSON.stringify(results));


	});
};

//GET SINGLE TODOS

exports.findOne = (req, res) =>{
	connection.query('select * from todos where Id=?',
		[req.params.id],
		(error,results,fields)=>{
			if (error) throw error;
			res.end(JSON.stringify(results));
		});
};

//UPDATE A TODO

exports.update = (req, res) =>{
	if(!req.body){
		return res.status(400).send({
			Message: "Todo description cant be empty"
		});
	}
	console.log(req.params.id);
	console.log(req.body.description);

	connection.query('UPDATE `todos` SET `name`=?, `description`=? where `id`=?',

		[req.body.name, req.body.descriptiom, req.params.id],
			(error,ressults, fields) =>{
				if (error) throw error;
				res.end(JSON.stringify(results));
				});
};
//DELETE A TODO

exports.delete = (req, res) =>{
	console.log(req.body);
	connection.query('DELETE FROM `todos` WHERE `Id` = ?',
		[req.body.id], (error,results,fields)=>{
			if(error) throw error;
			res.end('REcord has been deleted');
				});
};