const express = require('express')
const fs = require("fs");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
 

// YOUR CODE GOES IN HERE
app.get('/', function (req, res) {
  res.send('Hello World')
})
 

app.post('/blogs',(req,res) => {
  const {title} = req.body;
  const {content} = req.body;

   fs.writeFileSync(title, content);
    res.send('ok')
})

app.put('/posts/:title', (req,res) => {
  const {title} = req.params;
  const {content} = req.body;

 if(fs.existsSync(title)){
   

  fs.writeFileSync(title,content)
  res.send('ok')

 }
 else{
  res.send('This post does not exist!')
 }

})

app.delete('/blogs/:title',(req,res) => {
  const {title} = req.params;
 if (fs.existsSync(title)) { // Add condition here
      fs.unlinkSync(title);
      res.end('ok');
    } else {
      // Respond with message here
      res.send(`file does not exist`)
    }
})
app.get('/blogs/:title', (req,res) => {
const {title} = req.params;
if(fs.existsSync(title)){
  const post = fs.readFileSync(title);
  res.send(post)
}
else{
  res.status(404).send(`There is no blog by the name of ${title}`)
  
}

})


// app.get('/blogs/',(req,res) => {
 

//  fs.readdirSync('/blogs').forEach(file => {
//   console.log(file);
// });

// })



app.listen(3000,() => console.log(`server is up and running Ab`) )
