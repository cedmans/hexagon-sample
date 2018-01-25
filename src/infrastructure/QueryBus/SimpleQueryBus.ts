import { container } from '../ioc/inversify.config';
import {injectable} from "inversify";
import QueryBusContract from "./QueryBusContract";

@injectable()
export default class SimpleQueryBus implements QueryBusContract {
    private _handlers = {};

    execute(query: QueryContract): any {
        const handlerClass = this._handlers[query.constructor.name];
        const handler = container.get<QueryHandlerContract>(handlerClass);
        return handler.handle(query);
    }

    register(query, handler): void {
        this._handlers[query.name] = handler;
    }
}