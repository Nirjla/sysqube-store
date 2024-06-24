const { Router } = require("express")
const router = Router()
const authMiddleware = require("../middleware/authMiddleware")
const { addToCart, deleteFromCart, getCartItems } = require("../controllers/cartController")
router.post('/', authMiddleware, addToCart)
router.get('/',authMiddleware, getCartItems)
router.delete('/:itemId', authMiddleware, deleteFromCart)
module.exports = router