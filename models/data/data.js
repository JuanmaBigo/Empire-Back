import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import { brands } from './brands.js'
import { cars_v2 } from './cars_v2.js'
import { categories } from './categories.js'
import Color from '../Color.js'
import Category from '../Category.js'
import User from '../User.js'
import Car from '../Car.js'
import Rim from '../Rim.js'
import Brand from '../Brand.js'


let newBrands = async (brands) => await Brand.insertMany(brands)

let newUsers = async (users) => await User.insertMany(users)

let newCategories = async (categories) => await Category.insertMany(categories)



let newCars = async (cars) => {
    for (let car of cars) {
        console.log(car)
        let brand = await Brand.findOne({ name: car.brand_id })
        car.brand_id = brand._id
        let category = await Category.findOne({ name: car.category_id })
        car.category_id = category._id
        let newCar = await Car.create(car)
        for (let color of car.colors) {
            console.log(color)
            color.car_id = newCar._id
            color.price_color = color.price_color
            let newColor = await Color.create(color)
            for (let rim of color.rims) {
                console.log(rim)
                rim.color_id = newColor._id
                rim.name = rim.name
                rim.photo = rim.photo
                rim.price = rim.price
                await Rim.create(rim)
            }
        }

    }
}

let data = async () => {
    await newBrands(brands)
    await newUsers(users)
    await newCategories(categories)
    await newCars(cars_v2)
    console.log('done!')
}

data()