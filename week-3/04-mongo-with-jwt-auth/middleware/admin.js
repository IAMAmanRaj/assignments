const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

// Middleware for handling auth

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const decodedValue = jwt.verify(token, jwtPassword);
    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: "you are not authenticated",
      });
    }
  } catch (err) {
    return res.status(401).send("Invalid Details");
  }
}

module.exports = adminMiddleware;
