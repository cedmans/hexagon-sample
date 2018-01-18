function applyRoutes(server) {
    server.get('/', (request, response, next) => {
        response.send('hello, world!');
        next();
    });
}

export default applyRoutes;