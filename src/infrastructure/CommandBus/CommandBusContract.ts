interface CommandBusContract {
    execute(command : CommandContract) : void;
}