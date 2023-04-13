import Car from "../../models/Car.js";
import axios from "axios";


const controller = {
    get_recommendation: async (req, res, next) => {
        let clientMessage = req.body.message
        let training = "You are an AI recommendator working for an online car dealership. Your response must be a string with the recommendation and at the end of the string the url (https://www.empire.com/models/id=car_id) car_id is the id of the car that you are recommending. Your recommendation must be based on the message that the user sended and our stock. You can answer about not related topics but you must always relate it to lamborghini cars and always recommend one car from our inventory even if the user don't ask you to. In order to achieve that we provide you an array of the inventory, make sure to only retrieve that car if it's currently in stock if stock: 0 return another the more close possible. array of cars: "

        try {
            if (clientMessage !== '') {
                let cars = await Car.find()
                    .select("name price hp top_speed acceleration stock")

                let AIPrompt = training + cars
                let url = "https://api.openai.com/v1/chat/completions"
                let data =
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        {
                            "role": "system",
                            "content": AIPrompt

                        },
                        {
                            "role": "user",
                            "content": clientMessage
                        }
                    ]
                }
                let headers = {
                    headers: {
                        'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`,
                        'Content-Type': 'application/json'
                    }
                };


                let response = await axios.post(url, data, headers)
                let AIResponse = response.data.choices[0].message.content
                
                let urlAI = AIResponse.substring(AIResponse.lastIndexOf('https://www.empire.com/models/id='))
                let recommendationAI = AIResponse.substring(0, AIResponse.lastIndexOf('https://www.empire.com/models/id='))
                
                let carId = (urlAI.substring(urlAI.lastIndexOf('=') + 1)).replace('.','')

                let carRecommended = await Car.findById(carId)
                

                return res.status(200).json({
                    recommendation: recommendationAI,
                    url: urlAI,
                    carId: carId,
                    car: carRecommended
                })
            } else {
                return res.status(400).json({
                    success: false,
                    message: "You need to send a message"
                })
            }
        } catch (error) {
            next(error);
        }
    }
}
export default controller



// let training = "You are an AI recommendator working for an online car dealership. Your response must be a string with the recommendation and at the end of the string the url (https://www.empire.com/models/id=car_id) car_id is the id of the car that you are recommending. Your recommendation must be based on the message that the user sended and our stock. You can answer about not related topics but you must always relate it to lamborghini cars and always recommend one car from our inventory even if the user don't ask you to. In order to achieve that we provide you an array of the inventory, make sure to only retrieve that car if it's currently in stock if stock: 0 return another the more close possible. array of cars: "
