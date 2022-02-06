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
    return res.status(422).send({
      errors: [{ title: "User error" }, { detail: "Please fill userName" }],
    });
  }
  if (!email) {
    return res.status(422).send({
      errors: [{ title: "User error" }, { detail: "Please fill email" }],
    });
  }
  if (!password) {
    return res.status(422).send({
      errors: [{ title: "User error" }, { detail: "Please fill password" }],
    });
  }
  if (password !== confirmPassword) {
    return res.status(422).send({
      errors: [{ title: "User error" }, { detail: "Please check password" }],
    });
  }

  User.findOne({ email }, function (err, foundUser) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "User error" }, { detail: "Something went wrong" }],
      });
    }
    if (foundUser) {
      return res.status(422).send({
        errors: [{ title: "User error" }, { detail: "User already exist" }],
      });
    }
    const user = new User({ userName, email, password });
    user.save(function (err) {
      if (err) {
        return res.status(422).send({
          errors: [{ title: "User error" }, { detail: "Something went wrong" }],
        });
      }
      return res.json({ registered: true });
    });
  });
});

module.exports = router;
