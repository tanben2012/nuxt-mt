import mongoose from 'mongoose'
const Schema = mongoose.Schema
const personSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
})

export default mongoose.model('Person', personSchema)
