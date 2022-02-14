const mongoose= require('mongoose')

const userSchema= mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please include username"],
      unique: [true, "User name already registered"]
    },
    password: {
      type: String,
      required: [true, "Please include password"]
    }
  },
  {
    timestamps: true
  }
)

module.exports= mongoose.model('User', userSchema)
