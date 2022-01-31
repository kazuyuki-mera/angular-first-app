const express = require("express");
const router = express.Router();
const product = require("../model/product");

router.get("", function (req, res) {
  product.find({}, function (err, foundProducts) {
    res.json(foundProducts);
  });
});

router.get("/:productId", function (req, res) {
  const productId = req.params.productId;
  product.findById(productId, function (err, foundProduct) {
    res.json(foundProduct);
  });
});

module.exports = router;
