import { container } from '../ioc/inversify.config';
import {injectable} from "inversify";

@injectable()
export default class SimpleCommandBus implements CommandBusContract {
    private _handlers = {};

    execute(command: CommandContract): void {
        const handlerClass = this._handlers[command.constructor.name];
        const handler = container.get<CommandHandlerContract>(handlerClass);
        handler.handle(command);
    }

    register(command, handler) {
        this._handlers[command.name] = handler;
    }
}