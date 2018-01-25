import * as restify from 'restify';
import applyRoutes from '../router';
import applyPlugins from './plugins';

require('dotenv').config();

const server = restify.createServer();

applyPlugins(server);
applyRoutes(server);

server.listen(
    process.env.PORT,
    () => console.log('%s listening at %s', server.name, server.url)
);