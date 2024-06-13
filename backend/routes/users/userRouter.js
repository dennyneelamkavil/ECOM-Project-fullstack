const router = require("express").Router();
const { signup, login } = require("../../controllers/userController");
const asyncHandler = require("../../utils/asyncHandler");

router.post('/signup', asyncHandler(signup))
router.post('/login', asyncHandler(login))





module.exports = router;