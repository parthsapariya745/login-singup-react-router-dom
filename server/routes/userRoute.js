const express = require("express")
const { handleAddProduct, handleGetAllProduct, handleGetProductById, handleUpdateProuduct, handleDeleteProduct } = require("../controller/userController")

const router = express.Router()

router.post("/addProduct", handleAddProduct)
router.get("/getAllProduct", handleGetAllProduct)
router.get("/getById", handleGetProductById)
router.put("/updateProduct/:id", handleUpdateProuduct)
router.delete("/deleteProduct/:id", handleDeleteProduct)

module.exports = router