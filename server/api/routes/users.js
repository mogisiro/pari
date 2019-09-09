const express = require("express");
const router = express.Router();
const UsersController = require('../controllers/users');

router.get('/', UsersController.list);
router.post('/signin', UsersController.signin);
router.get('/:id', UsersController.detail);
router.post('/', UsersController.create);
router.put('/', UsersController.update);
router.delete('/', UsersController.delete);

module.exports = router;