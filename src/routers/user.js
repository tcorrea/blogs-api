const { Router } = require('express');
const user = require('../controllers/user');
const { fieldValidation } = require('../middleware/user');
const auth = require('../middleware/auth');

const router = Router();

router.get('/', auth.required, user.index);
router.post('/', fieldValidation, user.store);
router.get('/:id', auth.required, user.show);

module.exports = router;
