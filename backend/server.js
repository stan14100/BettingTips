const express = require('express')
const app = express()

const port = 8880

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.info(`Server is running on port:${port}`))