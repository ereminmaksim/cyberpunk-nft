// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
// const router = jsonServer.router('./public/db.json')
const middlewares = jsonServer.defaults({
    static: "./build"
})
const PORT = process.env.PORT || 3001

// CORS
const cors = require('cors')
server.use(cors())


server.use(middlewares)
// server.use(router)
// server.use(router)

server.listen(PORT, () => {
    console.log('JSON Server is running')
})


