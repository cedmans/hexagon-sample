import {inject, injectable} from "inversify";
import ListUsersQuery from "../../application/queries/ListUsers/ListUsersQuery";
import ListUsersHandler from "../../application/queries/ListUsers/ListUsersHandler";
import CommandBusContract from '../CommandBus/CommandBusContract';
import QueryBusContract from '../QueryBus/QueryBusContract';
import {TYPES} from "../ioc/types";
import RegisterUserCommand from "../../application/commands/RegisterUser/RegisterUserCommand";
import RegisterUserHandler from "../../application/commands/RegisterUser/RegisterUserHandler";
import UserViewModel from '../presentation/UserViewModel';
import DomainError from "../../domain/errors/DomainError";

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

        try {
            const users = this._queryBus.execute(new ListUsersQuery());
            response.json(200, users.map(UserViewModel.fromUser));
        } catch (error) {
            if (error instanceof DomainError) {
                return response.json(400, error.message);
            }
            throw error;
        }
    }

    create(request, response) {
        const [name, email] = ['name', 'email'].map(param => request.body[param]);

        this._commandBus.register(RegisterUserCommand, RegisterUserHandler);

        try {
            const registerUserCommand = new RegisterUserCommand();
            registerUserCommand.name = name;
            registerUserCommand.email = email;

            this._commandBus.execute(registerUserCommand);
            response.json(201, {name, email});
        } catch (error) {
            if (error instanceof DomainError) {
                return response.json(400, error.message);
            }
            throw error;
        }
    }
}