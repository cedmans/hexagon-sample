import Email from './values/Email';
import Name from './values/Name';
import UserID from './values/UserID';
import DomainError from "../errors/DomainError";

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
        if (userId < 1) {
            throw new DomainError('User ID must be a natural number');
        }
        this._userId.uniqueIdentifier = ~~userId;
    }

    get email() : string {
        return this._email.email;
    }
    set email(email: string) {
        if (email.match(/.+@.+/) === null) {
            throw new DomainError('Email format invalid');
        }
        this._email.email = email;
    }

    get name() : string {
        return this._name.fullName;
    }
    set name(name: string) {
        if (name.length < 1) {
            throw new DomainError('Empty name is invalid');
        }
        this._name.fullName = name;
    }
}