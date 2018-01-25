import { container } from '../ioc/inversify.config';
import UserController from "../Controllers/UserController";

function applyRoutes(server) {
    server.get('/', (request, response, next) => {
        response.send('hello, world!');
        next();
    });

    server.post('/users', (request, response) => {
        try {
            container.get<UserController>(UserController).create(request, response);
        } catch (error) {
            response.json(500);
        }
    });

    server.get('/users', (request, response) => {
        try {
            container.get<UserController>(UserController).index(request, response);
        } catch (error) {
            response.json(500);
        }
    });
}

export default applyRoutes;