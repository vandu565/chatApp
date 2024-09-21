const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

const profileController = async (req, res) => {
  const token = req.cookies?.authToken;
  if (token) {
    jwt.verify(token, process.env.JWTPRIVATEKEY, {}, async (err, userData) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      console.log(userData);
      const user = await User.findOne({ _id: userData._id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    });
  } else {
    res.status(401).json({ message: "No token" });
  }
};

const profileUpdate = async (req, res) => {
  const token = req.cookies?.authToken;
  if (token) {
    jwt.verify(token, process.env.JWTPRIVATEKEY, {}, async (err, userData) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }

      const { firstName, lastName, email, avatarLink } = req.body;
      const user = await User.findOne({ _id: userData._id });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Update user details
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.avatarLink = avatarLink;

      await user.save();
      res.json(user);
    });
  } else {
    res.status(401).json({ message: "No token" });
  }
};

module.exports = { profileController, profileUpdate };
