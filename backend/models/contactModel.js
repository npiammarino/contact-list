const mongoose= require('mongoose')

const contactSchema= (
  {
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
    timestamps: true,
  }
)

module.exports mongoose.model('Contact', contactSchema)
