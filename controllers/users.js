const User = require('../models/user');

function userIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function userCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
}

function UserShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate([{
      path: 'friends'
    }, {
      path: 'chats',
      select: 'messages'
    }])
    .fill('matches')
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

function usersUpdate(req, res, next) {
  //
  // if(req.file) req.body.image = req.file.filename;

  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if (!user) return res.notFound();
      user = Object.assign(user, req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

function usersDelete(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      return user.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

// function createMessage(req, res, next) {
//   User
//     .findById(req.params.id)
//     .exec()
//     .then(user => {
//       if (!user) return res.notFound();
//
//       req.body.createdBy = req.currentUser;
//       user.reviews.push(req.body);
//
//       return user.save();
//     })
//     .then(() => res.redirect(`/users/${req.params.id}`))
//     .catch((err) => {
//       if (err.name === 'ValidationError') res.badRequest(`/users/${req.params.id}`, err.toString());
//       next(err);
//     });
// }
//
// //DELETECOMMENT
// function deleteMessage(req, res, next) {
//   User
//     .findById(req.params.id)
//     .exec()
//     .then(user => {
//       if (!user) return res.notFound();
//       if (!user.belongsTo(req.user)) return res.unauthorized('You do not have permission to delete that resource');
//       user.reviews.id(req.params.reviewId).remove();
//
//       return user.save();
//     })
//     .then(user => res.redirect(`/users/${user.id}`))
//     .catch(next);
// }

// POST /users/:id/friends
function usersFriends(req, res, next) {
  //this requestFriend method is from the request friend plugin.
  //this is the current user requesting a friendship of the other person
  User
    .requestFriend(req.currentUser._id, req.params.id)
    .then(user => {
      // console.log(user);
      // if (user.friend.status === 'accepted')
      //   console.log('its a match!');

      res.status(200).json(user);
    })
    .catch(next);
}

module.exports = {
  index: userIndex,
  create: userCreate,
  show: UserShow,
  update: usersUpdate,
  delete: usersDelete,
  friends: usersFriends
};
