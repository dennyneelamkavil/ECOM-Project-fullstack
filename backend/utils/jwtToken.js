const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRETKEY;

const generateToken = async (user, password) => {
  const token = jwt.sign({ user, password }, secretKey);
  return token;
};
module.exports = generateToken;
