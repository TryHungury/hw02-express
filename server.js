const app = require("./app");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const { MONGO_URL, PORT = 3000 } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT);
    console.log("Node start successful");
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
