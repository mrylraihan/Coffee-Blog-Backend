const mongoose = require('mongoose')
const reviewSchema = require('./review')

const cafeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  hours: {
    type: String,
    required: true
  },
  review: [reviewSchema],
  // create a one-to-many relationship. where one user has many events
  // using the User reference
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Cafe', cafeSchema)
