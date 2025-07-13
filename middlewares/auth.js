const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked.!!");
  const token = "xyz"; // Simulating a token for authorization
  const isAuthorized = token === "xyz"; // Simulating authorization check
  if (!isAuthorized) {
    res.status(401).send("Unauthorized access");
  }
  else {
    next(); // Proceed to the next middleware or route handler  
  }
};


const userAuth = (req, res, next) => {
  console.log("User auth is getting checked.!!");
  const token = "xyz"; // Simulating a token for authorization
  const isAuthorized = token === "xyz"; // Simulating authorization check
  if (!isAuthorized) {
    res.status(401).send("Unauthorized access");
  }
  else {
    next(); // Proceed to the next middleware or route handler  
  }
};

module.exports = {
  adminAuth, 
  userAuth
}  // Exporting the middleware function