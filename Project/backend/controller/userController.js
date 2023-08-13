const generateToken = require("../Token/token");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const expressAsyncHandler = require("express-async-handler");

const registerCtrl = async (req, res) => {
  const findUser = await User.findOne({ email: req.body.email });
  if (findUser) {
    // throw new Error();
    res.json({ msg: "email is already exists" });
  } else {
    const { email, username, password } = req.body;
    const saltRounds = 10;
    const hashPassword = bcrypt.hashSync(password, saltRounds);
    const user = await User.create({
      email,
      username,
      password: hashPassword,
    });
    res.status(200).json({ msg: "register successful", user });
  }
  // try {
  // } catch (error) {
  //   res.json(error.message || error);
  // }
};
const loginCtrl = expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  try {
    if (!user) {
      res.status(404).json({ msg: "invalid email" });
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passwordMatch) {
        res.json({
          email: user?.email,
          username: user?.username,
          password: user?.password,
          isAdmin: user?.isAdmin,
          token: generateToken(user._id),
        });
      } else {
        res.json({ msg: "invalid password" });
      }
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = { registerCtrl, loginCtrl };
