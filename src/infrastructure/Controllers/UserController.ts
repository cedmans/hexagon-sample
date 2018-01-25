import {inject, injectable} from "inversify";
import ListUsersQuery from "../../application/ListUsers/ListUsersQuery";
import ListUsersHandler from "../../application/ListUsers/ListUsersHandler";
import QueryBusContract from '../QueryBus/QueryBusContract';
import {TYPES} from "../ioc/types";

@injectable()
export default class UserController {
    private _queryBus: QueryBusContract;

    constructor(
        @inject(TYPES.QueryBusContract) queryBus: QueryBusContract
    ) {
        this._queryBus = queryBus;
    }

    index(_, response) {
        this._queryBus.register(ListUsersQuery, ListUsersHandler);

        const users = this._queryBus.execute(new ListUsersQuery());
        response.json(200, users);
    }
}