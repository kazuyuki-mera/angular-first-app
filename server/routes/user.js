const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/login", function (req, res) {});

router.post("/register", function (req, res) {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  if (!userName) {
    // Invalid Error
  }
  if (!email) {
    // Invalid Error
  }
  if (!password) {
    // Invalid Error
  }
  if (password !== confirmPassword) {
    // Invalid Error
  }

  User.findOne({ email }, function (err, foundUser) {
    if (foundUser) {
      // Invalid Error
    }
    const user = new User({ userName, email, password });
    user.save(function (err) {
      if (err) {
        // Error Message
      }
      return res.json({ registered: true });
    });
  });
});

module.exports = router;
