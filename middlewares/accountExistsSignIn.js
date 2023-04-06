import User from '../models/User.js'

async function accountExistsSignIn(req, res, next) {
  const user = await User.findOne({ mail: req.body.mail })
  if (user) {
    req.user = {
      id: user._id,
      mail: user.mail,
      password: user.password,
      is_admin: user.is_admin,
    }
    return next()
  }
  return res.status(400).json({
    success: true,
    message: 'user does not exist!',
    data: req.body
  })
}

export default accountExistsSignIn