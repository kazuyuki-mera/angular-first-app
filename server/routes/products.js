const express = require("express");
const router = express.Router();
const product = require("../model/product");

router.get("", function (req, res) {
  product.find({}, function (err, foundProducts) {
    return res.json(foundProducts);
  });
});

router.get("/:productId", function (req, res) {
  const productId = req.params.productId;
  product.findById(productId, function (err, foundProduct) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Product error" }, { detail: "Product not found" }],
      });
    }
    return res.json(foundProduct);
  });
});

module.exports = router;
