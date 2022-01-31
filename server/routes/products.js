const express = require("express");
const router = express.Router();
const product = require("../model/product");

router.get("", function (req, res) {
  product.find({}, function (err, foundProducts) {
    res.json(foundProducts);
  });
});

module.exports = router;
