require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const MESSAGE = process.env.MESSAGE || 'no branch'

app.get('/', (req, res) => {
  res.send(`Hi in my CI CD git hub pipeline! branch: ${MESSAGE} last try for today`)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})