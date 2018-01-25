import { injectable } from 'inversify';
import User from "../../domain/User/User";
import UserRepositoryContract from '../../domain/User/repositories/UserRepositoryContract';

@injectable()
export default class UserRepository implements UserRepositoryContract {
    private static _users: Array<User> = [];

    public getAll(): Array<User> {
        return {...UserRepository._users};
    }

    public create(user: User): void {
        user.userId = Math.random() * 10000;
        UserRepository._users.push(user);
        console.dir(UserRepository._users);
    }
}