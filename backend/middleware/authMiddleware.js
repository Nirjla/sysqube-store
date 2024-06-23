const jwt = require("jsonwebtoken")

const { jwt, JWT } = require("../constants")

module.exports = async (req, res, next) => {
      try {
            const jwtToken = req.header('token')
            if (!jwtToken) {
                  return res.status(403).json({
                        success: false,
                        message: "Not Authorized"
                  })
            }
            const payload = jwt.verify(jwtToken, JWT.JWT_SECRET)
            req.user = payload.user
      } catch (err) {
            return res.status(403).josn({
                  success: false,
                  message: "Not Authorized"
            })
      }
      next()
}