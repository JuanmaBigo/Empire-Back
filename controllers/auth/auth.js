import User from './../../models/User.js'
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import transporter from '../../config/verificationMail.js'

const controller = {
    sign_up: async (req, res, next) => {
        req.body.is_online = false
        req.body.is_admin = false
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try {
            await User.create(req.body)
            const frontRoute = process.env.FRONT
            const message = {
                from: "projectempire9@gmail.com",
                to: req.body.mail,
                subject: "Welcome to Empire",
                text: "Welcome to Empire",
                html: `<p><br>Welcome to Empire App ${req.body.name} <br>
                        <br> Discover and Customize your Dream car. <br> 
                        <p style="color: grey;">--<br>
                        Kind regards,<br>
                        Empire's team<br>
                        Empire.app@gmail.com<br>
                        www.Empire.com<br>
                        <br>
                        Thanks for using our app! If you have any questions or suggestions, please do not hesitate to contact us.<br>
                        <br>
                        Empire App</p>`
                }
                await transporter.sendMail(message)
                    req.body.sc = 201
                    return res.status(200).json({
                        success: true,
                        message: 'user registered!',
                        data: req.body
                    }) 
                }catch (error) {
                    next(error)
                  }
                },
    sign_in: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { mail: req.user.mail }, //parametro de busqueda
                { is_online: true }, //parámetro a modificar
                { new: true } //para que devuelva el objeto modificado
            )
            user.password = null //para proteger la contraseña
            const token = jsonwebtoken.sign(
                { id: user._id }, //datos a encriptar
                process.env.SECRET, //llave para poder encriptar y luego desencriptar
                { expiresIn: 60 * 60 * 24 * 7 } //tiempo de expiracion en segundos
            )
            return res.status(200).json({
                success: true,
                message: 'Successful start!',
                user,
                token
            }) //enviar los datos necesarios del usuario y el token
        } catch (error) {
            next(error)
        }
    },

    sign_out: async (req, res, next) => {
        const { mail } = req.user
        try {
            await User.findOneAndUpdate(
                { mail },
                { is_online: false },
                { new: true }
            )
            return res.status(200).json({
                success: true,
                message: 'offline user!',
                data: req.user
            })
        } catch (error) {
            next(error)
        }
    },

    token: async (req, res, next) => {
        const { user } = req

        user.password = null

        const token = jsonwebtoken.sign(
            { id: user._id }, //datos a encriptar
            process.env.SECRET, //llave para poder encriptar y luego desencriptar
            { expiresIn: 60 * 60 * 24 * 7 } //tiempo de expiracion en segundos
        )
        try {
            return res.status(200).json({
                success: true,
                message: 'User logged in',
                user,
                token
            })
        } catch (error) {
            next(error)
        }
    },

}

export default controller