const { Router } = require('express');
const controller = require('../controllers/category');
const { fieldValidation } = require('../middleware/category');
const auth = require('../middleware/auth');

const router = Router();

router.post('/', fieldValidation, auth.required, controller.store);
// router.get('/', auth.required, category.index);
// router.get('/:id', auth.required, category.show);

module.exports = router;
