import { inject, injectable } from "inversify";
import { TYPES } from "../ioc/types";

@injectable()
export default class SimpleCommandBus implements CommandBusContract {
    private _handlers = {};
    private _container: ContainerContract;

    constructor(@inject(TYPES.ContainerContract) container: ContainerContract) {
        this._container = container;
    }

    execute(command: CommandContract): void {
        const handlerClass = this._handlers[command.constructor.name];
        const handler = this._container.make(handlerClass) as CommandHandlerContract;
        handler.handle(command);
    }

    register(command, handler): void {
        this._handlers[command.name] = handler;
    }
}