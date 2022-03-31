const Cart = require("../models/Cart");
const asyncHandler = require("express-async-handler");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const router = require("express").Router();

router.post(
  "/",
  verifyToken,
  asyncHandler(async (req, res) => {
    const newCart = new Cart(req.body);
    const savedCart = await newCart.save();

    res.status(200).json(savedCart);
  })
);

router.put(
  "/:id",
  verifyTokenAndAuth,
  asyncHandler(async (req, res) => {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedCart);
  })
);

router.delete(
  "/:id",
  verifyTokenAndAuth,
  asyncHandler(async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id });
  })
);

router.get(
  "/find/:userId",
  verifyTokenAndAuth,
  asyncHandler(async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });

    res.status(200).json(cart);
  })
);

router.get(
  "/",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const carts = await Cart.find();

    res.status(200).json(carts);
  })
);

module.exports = router;
