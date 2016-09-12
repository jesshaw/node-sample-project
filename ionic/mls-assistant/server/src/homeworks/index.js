'use strict';

var controller = require('./homeworks.controller');
var express = require('express');

var router = module.exports = express.Router();
router.get('/', controller.index); //query list
router.post('/', controller.create); //new
router.route('/:id') 
    .get(controller.getById) //query detail
    .put(controller.update) //update detail
    .delete(controller.deleteById); //delete detail
