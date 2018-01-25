import { container } from '../ioc/inversify.config';

export default class SimpleQueryBus implements QueryBusContract {
    private _handlers = {};

    execute(query: QueryContract): any {
        const handlerClass = this._handlers[query.constructor.name];
        const handler = container.get<QueryHandlerContract>(handlerClass);
        handler.handle(query);
    }

    register(command, handler) {
        this._handlers[command.name] = handler;
    }
}