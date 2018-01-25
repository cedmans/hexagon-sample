import User from "../../domain/User/User";

export default class UserViewModel {
    public email: string;
    public name: string;

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }

    public static fromUser(user: User): UserViewModel {
        return new UserViewModel(user.name, user.email);
    }
}