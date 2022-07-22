const express = require('express');
const app = express();
const port=process.env.PORT || 4009


app.use(express.static('public'))

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/portfolio.html')
})

app.listen(port, console.log('server is up on port'+':' + port))
