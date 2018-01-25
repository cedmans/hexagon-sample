export default interface QueryBusContract {
    execute(query: QueryContract): any;
    register(query, handler): void;
}