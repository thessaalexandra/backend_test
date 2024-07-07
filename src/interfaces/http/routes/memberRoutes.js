const express = require('express');
const router = express.Router();
const MemberController = require('C:/Users/Lenovo/backend_test/src/interfaces/http/controllers/memberController');

router.get('/', MemberController.getAllMembers);

module.exports = router;
