const Product = require("./model/product");
class FakeDb {
  constructor() {
    this.products = [
      {
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "sample text 1",
        heading2: "sample text 2",
        heading3: "sample text 3",
        headingText1:
          "sample text 1 sample text 1 sample text 1 sample text 1 sample text 1 sample text 1 ",
        headingText2:
          "sample text 2 sample text 2 sample text 2 sample text 2 sample text 2 sample text 2 ",
        headingText3:
          "sample text 3 sample text 3 sample text 3 sample text 3 sample text 3 sample text 3 ",
        coverImage: "./assets/images/placeholder.jpg",
      },
      {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "sample text 1",
        heading2: "sample text 2",
        heading3: "sample text 3",
        headingText1:
          "sample text 1 sample text 1 sample text 1 sample text 1 sample text 1 sample text 1 ",
        headingText2:
          "sample text 2 sample text 2 sample text 2 sample text 2 sample text 2 sample text 2 ",
        headingText3:
          "sample text 3 sample text 3 sample text 3 sample text 3 sample text 3 sample text 3 ",
        coverImage: "./assets/images/placeholder.jpg",
      },
      {
        name: "Phone Standard",
        price: 299,
        description: "",
        heading1: "sample text 1",
        heading2: "sample text 2",
        heading3: "sample text 3",
        headingText1:
          "sample text 1 sample text 1 sample text 1 sample text 1 sample text 1 sample text 1 ",
        headingText2:
          "sample text 2 sample text 2 sample text 2 sample text 2 sample text 2 sample text 2 ",
        headingText3:
          "sample text 3 sample text 3 sample text 3 sample text 3 sample text 3 sample text 3 ",
        coverImage: "./assets/images/placeholder.jpg",
      },
      {
        name: "iPhone 12",
        price: 299,
        description: "",
        heading1: "sample text 1",
        heading2: "sample text 2",
        heading3: "sample text 3",
        headingText1:
          "sample text 1 sample text 1 sample text 1 sample text 1 sample text 1 sample text 1 ",
        headingText2:
          "sample text 2 sample text 2 sample text 2 sample text 2 sample text 2 sample text 2 ",
        headingText3:
          "sample text 3 sample text 3 sample text 3 sample text 3 sample text 3 sample text 3 ",
        coverImage: "./assets/images/placeholder.jpg",
      },
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }
}

module.exports = FakeDb;
