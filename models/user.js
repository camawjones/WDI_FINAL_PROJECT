const mongoose = require('mongoose-fill');
const bcrypt = require('bcrypt');
const friendsPlugin = require('mongoose-friends-plugin');

const userSchema = new mongoose.Schema({
  firstName: { type: String, minlength: 2, required: true, trim: true},
  lastName: {type: String, minLength: 2, required: true, trim: true},
  email: { type: String, required: true, trim: true, unique: true },
  username: { type: String, required: true, trim: true, unique: true },
  lookalike: { type: String, required: true, trim: true, unique: true },
  bio: { type: String, required: true, trim: true, unique: true },
  interestedIn: { type: String, required: true, trim: true},
  sex: { type: String, required: true, trim: true},
  password: { type: String, required: true },
  image: { type: String, required: true }
});

userSchema.plugin(friendsPlugin());

userSchema
  .fill('matches', function(next) {

    const userIds = this.friends
      .filter(friend => friend.status === 'accepted')
      .map(friend => friend._id);

    this.db.model('User')
      .find({ _id: { $in: userIds }})
      .exec(next);

  });

userSchema
  .virtual('chats', {
    ref: 'Chat',
    localField: '_id',
    foreignField: 'users'
  });

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);
