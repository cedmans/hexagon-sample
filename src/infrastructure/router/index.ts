import SimpleCommandBus from '../CommandBus/SimpleCommandBus';
import ListUsersQuery from '../../application/ListUsers/ListUsersQuery';
import ListUsersHandler from '../../application/ListUsers/ListUsersHandler';
import RegisterUserCommand from '../../application/RegisterUser/RegisterUserCommand';
import RegisterUserHandler from '../../application/RegisterUser/RegisterUserHandler';
import SimpleQueryBus from "../QueryBus/SimpleQueryBus";

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
        const queryBus = new SimpleQueryBus();
        queryBus.register(ListUsersQuery, ListUsersHandler);

        const users = queryBus.execute(new ListUsersQuery());
        response.json(200, users);
    });
}

export default applyRoutes;