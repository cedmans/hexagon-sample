import { inject } from 'inversify';
import 'reflect-metadata';
import { TYPES } from '../../infrastructure/ioc/types';

import RegisterUserCommand from './RegisterUserCommand';
import User from '../../domain/User/User';

export default class RegisterUserHandler implements CommandHandlerContract {
    private _userRepository: UserRepositoryContract;

    constructor(@inject(TYPES.UserRepositoryContract) userRepository: UserRepositoryContract) {
        this._userRepository = userRepository;
    }

    public handle(command: RegisterUserCommand): void {
        const user = new User();
        user.name = command.name;
        user.email = command.email;

        this._userRepository.create(user);
    }
}