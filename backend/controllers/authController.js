const { default: mongoose } = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../model/User")
const { JWT } = require("../constants")

exports.register = async (req, res) => {
      const { first_name, last_name, email, password } = req.body
      const existingUser = await User.findOne({ email })
      if (existingUser) {
            res.status(401).json({
                  message: "User already exists"
            })
      }
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword
      })
      await user.save()
      res.status(201).json({
            message: "User created successfully"
      })
}

exports.login = async (req, res) => {
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email })
      if (!existingUser) {
            res.status(401).json({
                  message: "There is no user with this email!"
            })
      }
      else {
            const isMatch = await bcrypt.compare(password, existingUser.password)
            if (!isMatch) {
                  res.status(401).json({
                        message: "Invalid password"
                  })
            }
            else {

                  const user = {
                        id: existingUser._id,
                        email: existingUser.email
                  }
                  const token = jwt.sign(
                        { user }, JWT.JWT_SECRET, {
                        expiresIn: '1hr'
                  }
                  )
                  res.status(200).json({
                        message: "Logged In successfully",
                        token: token
                  })
            }
      }
}
