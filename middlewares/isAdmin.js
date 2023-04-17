async function isAdmin(req, res, next) {
    console.log(req.user)
    if (req.user.is_admin) {
        return next()
    }
    return res.status(400).json({
        success: true,
        message: `you don't admin permissions!`,
        data: req.body
    })
}

export default isAdmin