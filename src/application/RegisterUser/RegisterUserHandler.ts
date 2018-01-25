import RegisterUserCommand from './RegisterUserCommand';

export default class RegisterUserHandler implements CommandHandlerContract {
    private _userRepository: UserRepositoryContract;

    constructor(userRepository: UserRepositoryContract) {
        this._userRepository = userRepository;
    }

    public handle(command: RegisterUserCommand): void {
        const user = new User();
        user.name = command.name;
        user.email = command.email;

        this._userRepository.create(user);
    }
}