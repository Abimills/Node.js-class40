const { json, application } = require('express');
const express = require('express');
const app = express();
app.use(express.json());


app.get('/',(req,res) => {
  
  res.send('hello from backend to frontend!')
})

app.post('/weather', (req,res) => {
  const cityName = req.body.cityName;
res.json((cityName))

})

app.listen(3000, () => console.log('Server running on port 3000'));