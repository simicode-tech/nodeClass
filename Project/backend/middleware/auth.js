const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer ")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // find the user by id
        const user = await User.findById(decoded?.id).select("-password");
        // attech the user to the object
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error(" authorized token expired, login again");
    }
  } else {
    throw new Error("There is no token attached to the header");
  }
});

module.exports = authMiddleware;
