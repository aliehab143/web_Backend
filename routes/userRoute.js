const express = require('express');
const routes = express.Router();
const { getAllItems } = require('../controllers/user');

// Route for adding items
routes.route("/getAllItems").post(getAllItems)

module.exports = routes;
