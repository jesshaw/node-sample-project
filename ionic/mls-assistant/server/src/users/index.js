'use strict';

var controller = require('./users.controller');
var express = require('express');

var router = module.exports = express.Router();
router.get('/', controller.getsByClass); //query list
router.route('/:id') 
    .get(controller.getById) //query detail
    // .put(controller.update) //update detail
    .delete(controller.deleteById); //delete detail
router.put('/roles',controller.updateRoles); // update 
router.put('/username',controller.updateUsername); // update 
router.put('/password',controller.updatePassword); // update 


router.post('/create', controller.create); //new
router.post('/r', controller.generateRandom);
router.post('/login', controller.login);
