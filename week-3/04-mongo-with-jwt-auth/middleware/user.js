const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const decodedValue = jwt.verify(token, jwtPassword);
    if (decodedValue.username) {
      req.username = decodedValue.username;
      next();
    } else {
      res.status(403).json({
        msg: "you are not authenticated",
      });
    }
  } catch (err) {
    return res.sendStatus(401);
  }
}

module.exports = userMiddleware;
