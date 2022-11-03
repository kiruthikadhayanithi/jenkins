const express = require('express');
const app = express();


app.get('/', (req,res) => {
    console.log(" Slack testing");
    res.send("jenkins")
})

app.listen(3000)
  

