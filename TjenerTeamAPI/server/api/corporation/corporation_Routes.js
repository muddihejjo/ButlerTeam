const router = require('express').Router();
const controller = require('./corporation_Controller');
const auth = require('../../auth/auth');

let checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);
router.get('/me', checkUser, controller.me);

router.route('/')
    .get(controller.get)
    .post(controller.createUser);

router.route('/:id')
    .get(controller.getOne)
    .put(checkUser, controller.updateUser)
    .delete(checkUser, controller.deleteUser);

router.route('/changePassword/:id')
    .put(checkUser, controller.changePassword);

module.exports = router;
