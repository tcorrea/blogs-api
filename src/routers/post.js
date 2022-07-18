const { Router } = require('express');
const controller = require('../controllers/blogPost');
const { fieldValidation } = require('../middleware/post');
const auth = require('../middleware/auth');

const router = Router();

// router.get('/', auth.required, user.index);
router.post('/', fieldValidation, auth.required, controller.store);
// router.get('/:id', auth.required, user.show);

module.exports = router;
