'use strict';

var express = require('express');
// var todos = require('../../mock/todos.json');
var router = express.Router();
var Todo = require('../models/todo');

router.get('/todos', function (req, res) {
	Todo.find({}, function (err, todos) {
		if (err) {
			return res.status(500).json({message: err.message});
		}

		res.json({todos: todos});
	});
});


router.post('/todos', function (req, res) {
	var todo = req.body;


	Todo.create(todo, function(err, todo) {
		if (err) {
			return res.status(500).json({err: err.message});
		}

		res.send({'todo':todo, message: 'Todo Created!'});
	});

});


router.put('/todos/:id', function (req, res) {

	var id = req.params.id;

	var todo = req.body;

	Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
		if (err) {
			return res.status(500).json({err: err.message});
		}

		res.send({'todo':todo, message: 'Todo Updated!'});
	});
});


// TODO: Add DELETE route



module.exports = router;