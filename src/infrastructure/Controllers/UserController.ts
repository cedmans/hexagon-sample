import {inject, injectable} from "inversify";
import ListUsersQuery from "../../application/ListUsers/ListUsersQuery";
import ListUsersHandler from "../../application/ListUsers/ListUsersHandler";
import CommandBusContract from '../CommandBus/CommandBusContract';
import QueryBusContract from '../QueryBus/QueryBusContract';
import {TYPES} from "../ioc/types";
import RegisterUserCommand from "../../application/RegisterUser/RegisterUserCommand";
import RegisterUserHandler from "../../application/RegisterUser/RegisterUserHandler";

@injectable()
export default class UserController {
    private _commandBus: CommandBusContract;
    private _queryBus: QueryBusContract;

    constructor(
        @inject(TYPES.CommandBusContract) commandBus: CommandBusContract,
        @inject(TYPES.QueryBusContract) queryBus: QueryBusContract
    ) {
        this._commandBus = commandBus;
        this._queryBus = queryBus;
    }

    index(_, response) {
        this._queryBus.register(ListUsersQuery, ListUsersHandler);

        const users = this._queryBus.execute(new ListUsersQuery());
        response.json(200, users);
    }

    create(request, response) {
        const [name, email] = ['name', 'email'].map(param => request.body[param]);

        this._commandBus.register(RegisterUserCommand, RegisterUserHandler);

        const registerUserCommand = new RegisterUserCommand();
        registerUserCommand.name = name;
        registerUserCommand.email = email;

        this._commandBus.execute(registerUserCommand);
        response.json(201, {name, email});
    }
}