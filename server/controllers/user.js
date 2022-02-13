const jwt = require("jsonwebtoken");
const User = require("../model/user");
const config = require("./config");

function notAuthorization(res) {
  return res.status(401).send({
    errors: [{ title: "Not Authorized" }, { detail: "You need to login" }],
  });
}

exports.authMiddleware = function (req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return notAuthorization(res);
  }
  jwt.verify(token, config.SECRET, function (err, decodedToken) {
    if (err) {
      return res.status(401).send({
        errors: [{ title: "Not Authorized" }, { detail: "Invalid token" }],
      });
    }
    User.findById(decodedToken.userId, function (err, foundUser) {
      if (err) {
        return res.status(401).send({
          errors: [{ title: "Not Authorized" }, { detail: "Invalid token" }],
        });
      }
      if (!foundUser) {
        return res.status(401).send({
          errors: [{ title: "Not Authorized" }, { detail: "Invalid token" }],
        });
      }
      next();
    });
  });
};
