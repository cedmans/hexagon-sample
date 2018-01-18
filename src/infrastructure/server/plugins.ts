import * as restify from 'restify';

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

function applyPlugins(server) {
    prePlugins.map(plugin => server.pre(plugin));
    plugins.map(plugin => server.use(plugin));
}

export default applyPlugins;