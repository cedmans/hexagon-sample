import "reflect-metadata";
import { Container } from 'inversify';
import { TYPES } from './types';
import RegisterUserHandler from '../../application/RegisterUser/RegisterUserHandler';
import SimpleCommandBus from '../CommandBus/SimpleCommandBus';
import UserRepository from '../persistence/UserRepository';
import InversifyContainer from "../Container/InversifyContainer";

const container = new Container({ autoBindInjectable: true });
container.bind(TYPES.CommandBusContract).to(SimpleCommandBus);
container.bind(TYPES.ContainerContract).to(InversifyContainer);
container.bind(TYPES.UserRepositoryContract).to(UserRepository);
container.bind(TYPES.RegisterUserHandler).to(RegisterUserHandler);

export { container };