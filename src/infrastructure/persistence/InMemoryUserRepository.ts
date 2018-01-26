import { injectable } from 'inversify';
import User from "../../domain/User/User";
import UserRepositoryContract from '../../domain/User/repositories/UserRepositoryContract';
import DomainError from "../../domain/errors/DomainError";

@injectable()
export default class InMemoryUserRepository implements UserRepositoryContract {
    private static _users: Array<User> = [];

    public getAll(): Array<User> {
        return [...InMemoryUserRepository._users];
    }

    public create(user: User): void {
        if (InMemoryUserRepository._users.find(persistedUser => persistedUser.email === user.email) !== undefined) {
            throw new DomainError('Cannot create user with duplicate e-mail');
        }
        user.userId = Math.random() * 10000;
        InMemoryUserRepository._users.push(user);
    }
}