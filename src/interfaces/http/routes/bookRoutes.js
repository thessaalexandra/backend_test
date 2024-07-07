const express = require('express');
const router = express.Router();
const BookController = require('C:/Users/Lenovo/backend_test/src/interfaces/http/controllers/bookController');

router.get('/', BookController.getAllBooks);

module.exports = router;
