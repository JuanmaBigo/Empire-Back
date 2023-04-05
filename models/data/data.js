import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import { brands } from './brands.js'
import { cars_v1 } from './cars_v1.js'
import { categories } from './categories.js'
import { colors } from './colors.js'
import Color from '../Color.js'
import Category from '../Category.js'
import User from '../User.js'
import Car from '../Car.js'
import Option from '../Option.js'
import Brand from '../Brand.js'


let newBrands = async(brands) => await Brand.insertMany(brands)

let newUsers = async(users) => await User.insertMany(users)

let newCategories = async(categories) => await Category.insertMany(categories)

let newColors = async(colors) => await Color.insertMany(colors)


let newCars = async(cars) => {
    for (let car of cars) {
        let brand = await Brand.findOne({ name: car.brand_id })
        car.brand_id = brand._id
        let category = await Category.findOne({ name: car.category_id })
        car.category_id = category._id
        let newCar = await Car.create(car)
        for (let option of car.options) {
            option.car_id = newCar._id
            option.photo = option.photo
            await Option.create(option)
        }
    }
}

let data = async () => {
    await newBrands(brands)
    await newUsers(users)
    await newCategories(categories)
    await newColors(colors)
    await newCars(cars_v1)
    console.log('done!')
}

data()