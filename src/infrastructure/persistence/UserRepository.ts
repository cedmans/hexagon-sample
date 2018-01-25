import { injectable } from 'inversify';
import User from "../../domain/User/User";
import UserRepositoryContract from '../../domain/User/repositories/UserRepositoryContract';

@injectable()
export default class UserRepository implements UserRepositoryContract {
    private _users: Array<User> = [];

    public create(user: User): void {
        user.userId = Math.random() * 10000;
        this._users.push(user);
    }
}