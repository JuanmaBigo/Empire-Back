import express from "express"
import mercadopago from "mercadopago"
import passport from "../middlewares/passport.js";

const router = express.Router()

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY })

router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    const pay = req.body
    let preference = {
        items: [ {
            id: 123,
            title: pay.title,
            currency_id: 'ARS',
            picture_url: pay.image,
            description: pay.description,
            category_id: 'donation',
            quantity: 1,
            unit_price: pay.price,
        }],
        back_urls: {
            success: 'https://empire-project.netlify.app/completed-purchase',
            failure: 'https://empire-project.netlify.app/',
            pending: 'https://empire-project.netlify.app/',
        },
        auto_return: "approved",
        binary_mode: true,
    }
    mercadopago.preferences
               .create(preference)
               .then((response) => res.status(200)
               .send( {response} ))
               .catch((error) => res.status(400)
               .send( {error: error.message}))
})

export default router