const express = require('express');
const router = express.Router();
const todos = require('../controllers/todo.controllers.js');


router.post('/todos', todos.create);

router.get('/todos', todos.findAll);

router.get('/todos/:id', todos.findOne);

router.put('/todos', todos.update);

router.delete('/todos:id', todos.delete);





module.exports = router;