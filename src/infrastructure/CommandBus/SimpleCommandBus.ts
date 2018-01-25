import { container } from '../ioc/inversify.config';
import {injectable} from "inversify";
import CommandBusContract from './CommandBusContract';

@injectable()
export default class SimpleCommandBus implements CommandBusContract {
    private _handlers = {};

    execute(command: CommandContract): void {
        const handlerClass = this._handlers[command.constructor.name];
        const handler = container.get<CommandHandlerContract>(handlerClass);
        handler.handle(command);
    }

    register(command, handler): void {
        this._handlers[command.name] = handler;
    }
}