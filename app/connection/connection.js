const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/employ")
  .then(() => {
    console.log("connection connected");
  })
  .catch((err) => {
    console.log(`opps connection faild`);
  });
