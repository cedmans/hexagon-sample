import * as restify from 'restify';

const server = restify.createServer();
server.get('/', (request, response, next) => {
    response.send('hello, world!');
    next();
});

server.listen(8080, () => console.log('%s listening at %s', server.name, server.url));