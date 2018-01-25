import {inject, injectable} from "inversify";
import UserRepositoryContract from "../../../domain/User/repositories/UserRepositoryContract";
import {TYPES} from "../../../infrastructure/ioc/types";

@injectable()
export default class ListUsersHandler implements QueryHandlerContract {
    private _userRepository: UserRepositoryContract;

    constructor(@inject(TYPES.UserRepositoryContract) userRepository: UserRepositoryContract) {
        this._userRepository = userRepository;
    }

    handle(query: QueryContract): any {
        return this._userRepository.getAll();
    }
}