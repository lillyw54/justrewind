const router = require('express').Router();

// Import your controller(s) here
const userController = require('../../controllers/userController');

// Define your API routes here
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
