const jwt = require("jsonwebtoken");
const User = require("../model/user");
const config = require("./config");

function notAuthorization(res) {
  return "Error message";
}

exports.authMiddleware = function (req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return notAuthorization(res);
  }
  jwt.verify(token, config.SECRET, function (err, decodedToken) {
    if (err) {
      return "Error";
    }
    User.findById(decodedToken.userId, function (err, foundUser) {
      if (err) {
        return "Error";
      }
      if (!foundUser) {
        return "Error";
      }
      next();
    });
  });
};
