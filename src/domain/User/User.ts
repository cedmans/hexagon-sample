class User {
    private _userId : UserID;
    private _email : Email;
    private _name : Name;

    get userId() : number {
        return this._userId.uniqueIdentifier;
    }

    get email() : string {
        return this._email.email;
    }

    get name() : string {
        return this._name.fullName;
    }
}