let express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    method-override = require('method-override');

let usersController = require('../controllers/users');

router.route('/users')

    .get(usersController.getAll)

    .post(usersController.createUser);

router.route('/users/:id')

    .get(usersController.getUser)

    .patch(usersController.updateUser)

    .delete(usersController.removeUser);


module.exports = router
