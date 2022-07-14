const { Router } = require('express');
const user = require('../controllers/user');
const { fieldValidation } = require('../middleware/user');

const router = Router();

router.post('/', fieldValidation, user.store);

module.exports = router;
