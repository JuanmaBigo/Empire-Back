# .md for evidence documentation

## AUTH CONTROLLERS
/auth/signup
![image](https://user-images.githubusercontent.com/66440535/230480093-0fb8006c-e534-4f37-a292-639f5d33b978.png)
![image](https://user-images.githubusercontent.com/66440535/230480107-15f0a9de-e55f-4cb4-af34-252eb7b16ecd.png)

/auth/signin
![image](https://user-images.githubusercontent.com/66440535/230480160-b786707e-fb16-47e3-aa27-7c075c05681d.png)
![image](https://user-images.githubusercontent.com/66440535/230480172-568478ce-58c4-4bbe-b032-0d7b782c35af.png)

/auth/signout
![image](https://user-images.githubusercontent.com/66440535/230480231-7f001b4a-af69-444f-9d2a-f5a0318cd8e6.png)
![image](https://user-images.githubusercontent.com/66440535/230480249-23d93e72-4293-4282-9a0b-a7799b88c4c4.png)

/auth/token
![image](https://user-images.githubusercontent.com/66440535/230480307-ddb7f2ad-94cc-44f2-b21e-25fdb31c28d6.png)
![image](https://user-images.githubusercontent.com/66440535/230480331-d3637533-c5c1-4b52-abf2-5911a5975363.png)

/cars/:id
![image](https://user-images.githubusercontent.com/123500236/230805192-ab2eac58-e4f5-4a8b-8ac4-df14dd70869d.png)

/categories
![image](https://user-images.githubusercontent.com/123500236/230805166-e35aeb0d-3223-447b-84e2-da3641ffaf0d.png)

/cars/AI


# OPEN AI CHAT GPT API

### Generate API key
-Enter to https://platform.openai.com/account/api-keys and generate KEY
-store it in .env file
first we will make a test in postman to tune our model based on what we want the AI to respond
-Setup the authorization (bearer token) and in the Token field we will put our key that is stored in our .env file
-Setup the petition link: https://api.openai.com/v1/chat/completions
-make a POST petition to https://api.openai.com/v1/chat/completions with data and headers 
    +data contains: 
        +model (which is the AI model choosed) in our case we will be using gpt-3.5-turbo, cause is the fastest and cheaper model at the moment. 
        +messages: an array that contents the prompts for the response.
            -message: We can send two objects in the message array, one for each role
                -system: In the system object we will write the training for the AI, how to respond, who we are, work that is needed and how the AI should response to some specific circumstances
                -user: In the user object we will provide the prompt given by the user
    +headers:{
                'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`,
                'Content-Type': 'application/json'
             }

you will find the text response in: response.data.choices[0].message.content

![image](https://user-images.githubusercontent.com/66440535/231315994-fe8135be-72d7-4cf8-b76e-968d399ee865.png)
