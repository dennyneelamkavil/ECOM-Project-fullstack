const UserModel = require("../models/users");
const generateToken = require("../utils/jwtToken");
const SignUpJoi = require("../validations/signUpJoi");
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  const userDetails = req.body;
  await SignUpJoi.validateAsync(userDetails);
  userDetails.password = await bcrypt.hash(userDetails.password, 10);
  const user = new UserModel(userDetails);
  console.log(user);
  await user.save();
  res.status(201).send({ message: "User created successfully" });
};

exports.login = async (req, res) => {
  const loginDetails= req.body;
  await SignUpJoi.validateAsync(loginDetails);
  const user = await UserModel.findOne({ email: loginDetails.email });
  if (!user) {
    return res.status(401).send({ message: "User not found" });
  }
  if (!await bcrypt.compare(loginDetails.password, user.password)) {
    return res.status(401).send({ message: "Invalid password" });
  }
  const token = await generateToken(loginDetails.email, loginDetails.password);
  console.log(token);
  res.status(200).send({status:true, message: "Login successful", token: token});
}