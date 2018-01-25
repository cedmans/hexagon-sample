import "reflect-metadata";
import { Container } from 'inversify';
import { TYPES } from './types';
import RegisterUserHandler from '../../application/RegisterUser/RegisterUserHandler';
import SimpleCommandBus from '../CommandBus/SimpleCommandBus';
import UserRepository from '../persistence/InMemoryUserRepository';
import SimpleQueryBus from "../QueryBus/SimpleQueryBus";

const container = new Container({ autoBindInjectable: true });
container.bind(TYPES.CommandBusContract).to(SimpleCommandBus);
container.bind(TYPES.QueryBusContract).to(SimpleQueryBus);
container.bind(TYPES.UserRepositoryContract).to(UserRepository);
container.bind(TYPES.RegisterUserHandler).to(RegisterUserHandler);

export { container };