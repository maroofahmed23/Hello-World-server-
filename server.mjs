import express from 'express'
import cors from 'cors'; 

const app = express()
app.use(cors());

app.get('/home', (req, res) => {
  res.send('i am home page!')
})

app.get('/profile', (req, res) => {
  res.send('i am profile page!')
})

app.get('/weather', (req, res) => {
res.send({

  weather: 'sunny',
  temperature:'20',
  city: 'London'
})
})

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})