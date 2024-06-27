const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRETKEY;

exports.generateToken = async (user, password) => {
  const userData = { user, password };
  const options = { expiresIn: "1h", issuer: "backend server", audience: "frontend server" };
  const token = jwt.sign(userData, secretKey, options);
  return token;
};

exports.verifyToken = async (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(403).send("A token is required for authentication");
  }
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    console.log("token: ", token);
  jwt.verify(token, process.env.JWT_SECRETKEY);
  return next();
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};
