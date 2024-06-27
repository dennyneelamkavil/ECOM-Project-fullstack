const router = require("express").Router();
const {
  addProduct,
  getById,
  deleteProduct,
  updateProduct,
  getAllProducts,
} = require("../../controllers/productController");
const asyncHandler = require("../../utils/asyncHandler");
const { verifyToken } = require("../../utils/jwtToken");
const upload = require("../../utils/multer");

router
  .post("/", verifyToken,upload.single("image"), asyncHandler(addProduct))
  .get("/", verifyToken, asyncHandler(getAllProducts))
  .put("/:id", verifyToken,upload.single("image"), asyncHandler(updateProduct))
  .delete("/:id", verifyToken, asyncHandler(deleteProduct))
  .get("/:id", verifyToken, asyncHandler(getById));

module.exports = router;
