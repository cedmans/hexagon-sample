import * as restify from 'restify';

require('dotenv').config();

const prePlugins = [
    restify.plugins.pre.context(),
    restify.plugins.pre.sanitizePath(),
    restify.plugins.pre.userAgentConnection()
];

const plugins = [
    restify.plugins.acceptParser([
        'application/json'
    ]),
    restify.plugins.authorizationParser(),
    restify.plugins.queryParser(),
    restify.plugins.bodyParser(),
    restify.plugins.requestLogger(),
    restify.plugins.gzipResponse(),
];

const server = restify.createServer();

prePlugins.map(plugin => server.pre(plugin));
plugins.map(plugin => server.use(plugin));

server.get('/', (request, response, next) => {
    response.send('hello, world!');
    next();
});

server.listen(
    process.env.PORT,
    () => console.log('%s listening at %s', server.name, server.url)
);