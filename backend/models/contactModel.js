const mongoose= require('mongoose')

const contactSchema= mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    firstName: String,
    lastName: String,
    companyName: String,
    phone: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: String
  },
  {
    timestamps: true
  }
)

module.exports= mongoose.model('Contact', contactSchema)
