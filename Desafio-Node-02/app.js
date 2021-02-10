import express from 'express'
import routes from './src/routes/routes.js'
const server = express()
server.use(express.json())
server.use(routes)

server.listen(3000, () => {
    console.log('Server running on port 3000')
})
