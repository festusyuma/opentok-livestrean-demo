require('dotenv').config()

const express = require('express')
const app = express();
const router = express.Router();

app.use(router)

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000

app.listen(PORT, HOST, () => {
  console.log(`Server running on PORT: ${PORT}`)
})
