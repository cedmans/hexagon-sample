import { container } from '../ioc/inversify.config';
import UserController from "../Controllers/UserController";

function applyRoutes(server) {
    server.get('/', (request, response, next) => {
        response.send('hello, world!');
        next();
    });

    server.post('/users', (request, response) => {
        container.get<UserController>(UserController).create(request, response);
    });

    server.get('/users', (request, response) => {
        container.get<UserController>(UserController).index(request, response);
    });
}

export default applyRoutes;