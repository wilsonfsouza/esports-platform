import express from 'express'

const app = express()

app.listen(3333, () => {
  console.log("Running server at port 3333")
})