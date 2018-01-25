interface CommandBusContract {
    register(command, handler): void;
    execute(command: CommandContract): void;
}