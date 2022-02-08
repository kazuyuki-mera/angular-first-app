const express = require("express");
const router = express.Router();
const User = require("../model/user");
const config = require("../config/dev");
const jwt = require("jsonwebtoken");

router.post("/login", function (req, res) {
  const { email, password } = req.body;
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
  User.findOne({ email }, function (err, foundUser) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "User error" }, { detail: "Something went wrong" }],
      });
    }
    if (!foundUser) {
      return res.status(422).send({
        errors: [{ title: "User error" }, { detail: "User is not exist" }],
      });
    }
    if (!foundUser.hasSamePassword(password)) {
      return res.status(422).send({
        errors: [{ title: "User error" }, { detail: "Incorrect password" }],
      });
    }
    const token = jwt.sign(
      {
        userId: foundUser.id,
        userName: foundUser.userName,
      },
      config.SECRET,
      { expiresIn: "1h" }
    );
    return res.json(token);
  });
});

router.post("/register", function (req, res) {
  const { userName, email, password, confirmPassword } = req.body;

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
