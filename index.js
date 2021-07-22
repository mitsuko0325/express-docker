const express = require('express')
const app = express()
const os = require("os")
const date = new Date()


app.get('/', (req,res) => {

  const hostname = os.hostname()  
  res.send(`Hello World! This is runnung on ${hostname}`)
})

app.get('/page1',() => {
  res.send(`/pages1 This is runnung on ${hostname}`)
})

app.get('/page2',() => {
  res.send(`/pages2 This is runnung on ${hostname}`)
})

app.get('/probe',(req, res)=>{
  const now = new Date()
  const timePassed = now - date
  console.log(`timepassed: ${timePassed}`)
  if (timePassed < 30000) {
    res.send("Not 30sec passed")
  }else(
    res.sendStatus(500)
  )
})

app.listen(3000, ()=>{
    console.log('Express is listening on port 3000')
})