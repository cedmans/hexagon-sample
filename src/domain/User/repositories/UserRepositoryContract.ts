interface UserRepositoryContract {
    find(id : number) : User;
    add(user : User) : void;
    remove(user : User) : void;
    findByName(name : String) : Array<User>;
}