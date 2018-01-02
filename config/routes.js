const router = require('express').Router();
const users  = require('../controllers/users');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const chats = require('../controllers/chats');

router.route('/users')
  .get(users.index)
  .post(users.create);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/friends')
  .post(secureRoute, users.friends);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

//Messages create

router.route('/chats/:id/messages')
  .post(secureRoute, chats.messagesCreate);
//Chats create
router.route('/chats')
  .get(secureRoute, chats.find);

router.route('/chats/:id')
  .get(secureRoute, chats.show);

router.route('/users/:id/chats')
  .post(secureRoute, chats.create);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
