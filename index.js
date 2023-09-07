const express = require('express')
const app = express()

app.get('/api', (request, response) => {
    response.send('{ health: true }')
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})