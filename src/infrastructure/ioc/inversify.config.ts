import "reflect-metadata";
import { Container } from 'inversify';
import { TYPES } from './types';
import RegisterUserHandler from '../../application/RegisterUser/RegisterUserHandler';
import SimpleCommandBus from '../CommandBus/SimpleCommandBus';
import UserRepositoryContract from '../../domain/User/repositories/UserRepositoryContract';
import UserRepository from '../persistence/UserRepository';

const container = new Container({ autoBindInjectable: true });
container.bind<CommandBusContract>(TYPES.CommandBusContract).to(SimpleCommandBus);
container.bind<UserRepositoryContract>(TYPES.UserRepositoryContract).to(UserRepository);
container.bind<RegisterUserHandler>(TYPES.RegisteryUserHandler).to(RegisterUserHandler);

export { container };