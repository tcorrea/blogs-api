const { Router } = require('express');
const controller = require('../controllers/blogPost');
const validation = require('../middleware/post');
const auth = require('../middleware/auth');

const router = Router();

router.get('/', auth.required, controller.index);
router.post('/', validation.store, auth.required, controller.store);
router.get('/:id', auth.required, controller.show);
router.put('/:id', validation.update, auth.required, controller.update);
router.delete('/:id', auth.required, controller.destroy);
module.exports = router;
