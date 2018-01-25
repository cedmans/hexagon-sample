import Email from './values/Email';
import Name from './values/Name';
import UserID from './values/UserID';

export default class User {
    private _userId : UserID;
    private _email : Email;
    private _name : Name;

    constructor() {
        this._userId = new UserID();
        this._email = new Email();
        this._name = new Name();
    }

    get userId() : number {
        return this._userId.uniqueIdentifier;
    }
    set userId(userId: number) {
        this._userId.uniqueIdentifier = ~~userId;
    }

    get email() : string {
        return this._email.email;
    }
    set email(email: string) {
        this._email.email = email;
    }

    get name() : string {
        return this._name.fullName;
    }
    set name(name: string) {
        this._name.fullName = name;
    }
}