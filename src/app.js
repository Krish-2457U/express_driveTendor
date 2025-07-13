const e = require('express');
const express = require('express');
const {userAuth, adminAuth} = require('../middlewares/auth'); // Importing the auth middleware
const app = express(); // Instance of Express application


//Handle Authentication for all routes GET, POST, PUT, DELETE
// app.use("/admin", adminAuth); // Apply adminAuth middleware to all routes starting with /admin
// app.use("/user", userAuth);

app.post('/user/login', (req, res) => {
  res.send("User logged in successfully");
}
)

app.get('/users/data', userAuth,  (req, res) => {
  console.log("Handling the users route!!");
  res.send("User data sent");
});

app.get('/admin/getAllUsers', adminAuth,  (req, res) => {
  res.send("All Data sent");
});


  app.get('/admin/deleteUser', (req, res) => {
  res.send("Deleted a user");
});

app.listen(8888, () => {
  console.log(`Server is running on port 8888`);
}); // Start the server on port 3000