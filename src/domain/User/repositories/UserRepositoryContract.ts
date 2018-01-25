import User from '../User';

export default interface UserRepositoryContract {
    getAll(): Array<User>;
    create(user : User) : void;
}