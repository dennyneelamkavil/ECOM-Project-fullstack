const router = require("express").Router();
const {
  addProduct,
  getById,
  deleteProduct,
  updateProduct,
  getAllProducts,
} = require("../../controllers/productController");
const asyncHandler = require("../../utils/asyncHandler");
const upload = require("../../utils/multer");

router
  .post("/",upload.single("image"), asyncHandler(addProduct))
  .get("/", asyncHandler(getAllProducts))
  .put("/:id", asyncHandler(updateProduct))
  .delete("/:id", asyncHandler(deleteProduct))
  .get("/:id", asyncHandler(getById));

module.exports = router;
