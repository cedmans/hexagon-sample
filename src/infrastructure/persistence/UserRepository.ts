class UserRepository implements UserRepositoryContract {
    private _users: Array<User> = [];

    public create(user: User): void {
        this._users.push(user);
    }
}