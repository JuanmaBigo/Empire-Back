import express from 'express';
import userRouter from './users.js'
import carRouter from "./cars.js"
import categoryRouter from "./categories.js"


let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Empire Backend' });
});


// en el enrutador principal voy a enrutar todos los recursos
// es decir voy a llamar y configurar las rutas de usuarios, autos, etc
// a traves del metodo .use() le indico al enrutador principal que utilice esas rutas con el endpoint correspondiente

router.use("/cars", carRouter)
router.use("/auth", userRouter)
router.use("/categories", categoryRouter)





export default router;

