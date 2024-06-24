const { Router } = require("express")
const router = Router()
const authMiddleware = require("../middleware/authMiddleware")
const { addToCart, deleteFromCart } = require("../controllers/cartController")
router.post('/', authMiddleware, addToCart)
router.delete('/', authMiddleware, deleteFromCart)
module.exports = router