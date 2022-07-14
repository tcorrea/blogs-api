const { Router } = require('express');
const user = require('../controllers/user');
const { fieldValidation } = require('../middleware/login');

const router = Router();

router.post('/', fieldValidation, user.login);

module.exports = router;
