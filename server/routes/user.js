const express = require("express");
const router = express.Router();
const user = require("../model/user");

router.post("/login", function (req, res) {
  // product.find({}, function (err, foundProducts) {
  //   return res.json(foundProducts);
  // });
});

router.post("/register", function (req, res) {
  // const productId = req.params.productId;
  // product.findById(productId, function (err, foundProduct) {
  //   if (err) {
  //     return res.status(422).send({
  //       errors: [{ title: "Product error" }, { detail: "Product not found" }],
  //     });
  //   }
  //   return res.json(foundProduct);
  // });
});

module.exports = router;
