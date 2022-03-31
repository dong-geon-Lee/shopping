const router = require("express").Router();
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const Crypto = require("crypto-js");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} = require("../middleware/verifyToken");
const { generateToken } = require("../middleware/generateToken");

router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new Error("add all user Info");
    }

    const hashedPassword = Crypto.AES.encrypt(
      password,
      process.env.PASS_SEC
    ).toString();

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    res.status(200).json(savedUser);
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(404).json({ message: "user not found" });

    const hashedPassword = Crypto.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const originPassword = hashedPassword.toString(Crypto.enc.Utf8);

    if (originPassword !== req.body.password) {
      res.status(401).json({ message: "password not correct!" });
    }
    const accessToken = generateToken(user._id, user.isAdmin);

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  })
);

router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = Crypto.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete(
  "/:id",
  verifyTokenAndAuth,
  asyncHandler(async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);

    !user && res.status(400).json({ message: "not delete!" });

    res.status(200).json({ id: user._id });
  })
);

router.get(
  "/",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const users = await User.find();

    res.status(200).json(users);
  })
);

router.get(
  "/find/:id",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    !user && res.status(400).json({ message: "not found user" });

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  })
);

router.get(
  "/status",
  verifyTokenAndAdmin,
  asyncHandler(async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 2));

    const setDate = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { free: { $month: "$createdAt" } } },
      { $group: { _id: "$free", total: { $sum: 1 } } },
    ]);

    res.status(200).json(setDate);
  })
);

module.exports = router;

// router.put(
//   "/:id",
//   verifyTokenAndAuth,
//   asyncHandler(async (req, res) => {
//     const { username, email, password } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: "add update All field! " });
//     }

//     const hashedPassword = Crypto.AES.encrypt(
//       password,
//       process.env.PASS_SEC
//     ).toString();

//     const userId = await User.findById(req.user.id);

//     !userId && res.status(400).json({ message: "not user ID!" });

//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { $set: { username, email, password: hashedPassword } },
//       { new: true }
//     );

//     res.status(200).json(updatedUser);
//   })
// );

// const accessToken = jwt.sign(
//   { id: user._id, isAdmin: user.isAdmin },
//   process.env.JWT_SECRET,
//   {
//     expiresIn: "30d",
//   }
// );
