const jwt = require("jsonwebtoken");


require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || null;

  console.log(token, "token");

  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, result) => {
        try {
          if (result) {
            req.body.userId = result.userId;
            return next();
          } else {
            return res.status(200).send({ msg: "Please Login!!" });
          }
        } catch (error) {
          return res.status(400).send({ error: error.message });
        }
      });
    } else {
      return res.status(200).send({ msg: "Please Login first!!" });
    }
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = { authMiddleware };