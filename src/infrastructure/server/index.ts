import * as restify from 'restify';

require('dotenv').config();

const server = restify.createServer();
server.get('/', (request, response, next) => {
    response.send('hello, world!');
    next();
});

server.listen(process.env.PORT, () => console.log('%s listening at %s', server.name, server.url));