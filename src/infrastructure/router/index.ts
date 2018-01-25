import Container from '../Container/InversifyContainer';

import RegisterUserCommand from '../../application/RegisterUser/RegisterUserCommand';
import RegisterUserHandler from '../../application/RegisterUser/RegisterUserHandler';
import SimpleCommandBus from "../CommandBus/SimpleCommandBus";

function applyRoutes(server) {
    server.get('/', (request, response, next) => {
        response.send('hello, world!');
        next();
    });

    server.get('/create/:name/:email', (request, response, next) => {
        const [name, email] = ['name', 'email'].map(param => request.params[param]);

        const commandBus = new SimpleCommandBus(new Container());
        commandBus.register(RegisterUserCommand, RegisterUserHandler);

        const registerUserCommand = new RegisterUserCommand();
        registerUserCommand.name = name;
        registerUserCommand.email = email;

        commandBus.execute(registerUserCommand);
        response.json(201, {name, email});
    });
}

export default applyRoutes;