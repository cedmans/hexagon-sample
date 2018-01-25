export default class SimpleCommandBus implements CommandBusContract {
    private _handlers = {};

    constructor() {}

    execute(command: CommandContract): void {
        const handlerClass = this._handlers[command.constructor.name];
        const handler = new handlerClass();
        handler.handle(command);
    }

    register(command, handler) {
        this._handlers[command.name] = handler;
    }
}