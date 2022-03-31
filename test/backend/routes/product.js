const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");
const Product = require("../models/Product");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    let products;

    if (qNew) {
      console.log(qNew, products, "뉴");

      products = await Product.find().sort({ createdAt: -1 }).limit(2);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });

      console.log(qCategory, products, "카테고리");
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  })
);

router.get(
  "/find/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  })
);

router.post(
  "/",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();

    res.status(200).json(savedProduct);
  })
);

router.put(
  "/:id",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  })
);

router.delete(
  "/:id",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id });
  })
);

module.exports = router;
