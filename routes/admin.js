const express = require('express');
const route = express.Router();
const adminController = require('../controller/admin');

route.get('/', (req, res) => {
    res.send('admin controller working');
    res.end();
})



route.get('/create-database', (req, res) => {
    adminController.createDatabase(req, res);
})


route.get('/create-table', (req, res) => {
    adminController.createTable(req, res);
})

route.get('/insert-record', (req, res) => {
    adminController.insertRecord(req, res);
})


route.get('/get-record', (req, res) => {
    adminController.getRecord(req, res);
})


route.get('/delete-record', (req, res) => {
    adminController.deleteRecord(req, res);
})


route.get('/get-all-record', (req, res) => {
    adminController.getAllRecord(req, res);
})



module.exports.route = route;