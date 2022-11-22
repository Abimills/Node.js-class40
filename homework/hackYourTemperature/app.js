import bodyParser from 'body-parser';

import express from 'express'
import API_KEY from './source/key.js';
 const app = express();
app.use(bodyParser.json());


app.get('/',(req,res) => {
  
  res.send('hello from backend to frontend!')
})

app.post('/weather', async(req,res) => {

 try{



   const {cityName} = req.body;
   const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
   
   const data = await response.json();

 if(!cityName){
  res.status(400).send({weatherText:"please enter a city name"})
 }
 
 else{

   res.send({ weatherText:`The temperature in ${cityName} is ${data.main.temp}` })

 }


 }

catch(err) {

  res.status(400).send({ weatherText: "City is not found!" });
}
  
    


})
export default app;