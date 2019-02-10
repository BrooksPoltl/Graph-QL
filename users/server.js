const express = require('express')
const expressGraphQL = require('express-graphql');
const server = express();
const schema = require('./schema/schema');

server.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

server.listen(5000, ()=>{
    console.log('listening on port 5000')
})