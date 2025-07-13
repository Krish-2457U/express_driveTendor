const e = require("express");
const express = require("express");
const app = express(); // Instance of Express application

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong ");
  }
});

app.get("/getUserData", (req, res) => {
  try {
    //Logic of DB Call and get user data

    throw new Error("Error in getting user data");
    res.send("User data sent");
  } catch (error) {
    res.status(500).send(err.message);
  }
});

app.listen(7777, () => {
  console.log(`Server is running on port 7777`);
}); // Start the server on port 3000
