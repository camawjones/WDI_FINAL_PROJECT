// const mongoose = require('mongoose');
//
// const messageSchema = new mongoose.Schema({
//   content: { type: String },
//   createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// });
//
// const chatSchema = new mongoose.Schema({
//   users: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }],
//   validate: [mustBeTwo, 'Please contain two users.'],
//   messages: [messageSchema]
// });
//
// module.exports = mongoose.model('Chat', chatSchema);


const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  users: [{
    type: mongoose.Schema.ObjectId, ref: 'User', required: true,
    validate: [mustBeTwo, 'Please contain two users.']
  }],
  messages: [{
    sender: { type: mongoose.Schema.ObjectId, ref: 'User' },
    content: { type: String }
  }]
});

function mustBeTwo() {
  const self = this;
  return self.users.length === 2;
}


module.exports = mongoose.model('Chat', chatSchema);
