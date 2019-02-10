const express = require('express')
const expressGraphQL = require('express-graphql');
const server = express();
server.use('/graphql', expressGraphQL({
    graphiql: true
}))

server.listen(5000, ()=>{
    console.log('listening on port 5000')
})