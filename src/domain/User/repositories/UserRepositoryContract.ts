import User from '../User';

export default interface UserRepositoryContract {
    create(user : User) : void;
}