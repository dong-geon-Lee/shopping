const jwt = require("jsonwebtoken");

const generateToken = (_id, user) => {
  return jwt.sign({ id: _id, isAdmin: user }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { generateToken };

// const accessToken = jwt.sign(
//   { id: user._id, isAdmin: user.isAdmin },
//   process.env.JWT_SECRET,
//   {
//     expiresIn: "30d",
//   }
// );
