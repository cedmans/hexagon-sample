export default interface CommandBusContract {
    execute(command : CommandContract) : void;
    register(command, handler): void;
}