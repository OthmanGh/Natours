const e = require('express');
const router = e.Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/forgotpassword').post(authController.forgotPassword);
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
