import SimpleCommandBus from '../CommandBus/SimpleCommandBus';
import RegisterUserCommand from '../../application/RegisterUser/RegisterUserCommand';
import RegisterUserHandler from '../../application/RegisterUser/RegisterUserHandler';

import { container } from '../ioc/inversify.config';
import UserController from "../Controllers/UserController";

function applyRoutes(server) {
    server.get('/', (request, response, next) => {
        response.send('hello, world!');
        next();
    });

    server.post('/users', (request, response) => {
        const [name, email] = ['name', 'email'].map(param => request.body[param]);

        const commandBus = new SimpleCommandBus();
        commandBus.register(RegisterUserCommand, RegisterUserHandler);

        const registerUserCommand = new RegisterUserCommand();
        registerUserCommand.name = name;
        registerUserCommand.email = email;

        commandBus.execute(registerUserCommand);
        response.json(201, {name, email});
    });

    server.get('/users', (request, response) => {
        container.get<UserController>(UserController).index(request, response);
    });
}

export default applyRoutes;