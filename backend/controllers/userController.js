const UserModel = require("../models/users");
const SignUpJoi = require("../validations/signUpJoi");

exports.signup = async (req, res) => {
  const userDetails = req.body;
  await SignUpJoi.validateAsync(userDetails);
  const user = new UserModel(userDetails);
  console.log(user);
  await user.save();
  res.status(201).send({ message: "User created successfully" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  await SignUpJoi.validateAsync(req.body);
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).send({ message: "User not found" });
  }
  if (user.password !== password) {
    return res.status(401).send({ message: "Invalid password" });
  }
  console.log(user);
  res.status(200).send({ message: "Login successful" });
}