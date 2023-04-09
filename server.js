const app = require('./app')
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => {

  console.log("Database connection successful")
  app.listen(3000, () => {

    console.log("App start successful")
  })

}).catch((err) => {
console.log(err)
process.exit(1)
})



