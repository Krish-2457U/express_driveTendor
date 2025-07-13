const express = require('express');
const app = express(); // Instance of Express application


app.get(
  "/users", 
  (req, res, next) => {
    console.log("Handling the router user!!");
    //res.send("User route accessed!"); // Send a response to the client
    next(); // Pass control to the next middleware
  }, 
  (req, res, next) => {
    console.log("Handling the route user 2!!");
    // res.send("2nd Response!"); // Send another response
    next(); // Pass control to the next middleware
  },
  (req, res, next) => {
    console.log("Handling the route user 3!!");
    // res.send("3rd Response!"); // Final response sent to the client
    next(); // Pass control to the next middleware
  }, 
  (req, res, next) => {
    console.log("Handling the route user 4!"); // Send the final response to the client
    next(); // This will not be called since the response is sent
  }
  , (req, res) => {
    res.send("Handling the route user 5!"); // Final response sent to the client
  }
    
)


app.listen(8888, () => {
  console.log(`Server is running on port 8888`);
}); // Start the server on port 3000