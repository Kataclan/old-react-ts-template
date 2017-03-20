export class User {
    public _id: string;
    public username: string;
    public first_name: string;
    public last_name: string;

    constructor() {

    }

    public toString(): string {
        return "Username = ${username}, email = ${email}";
    }
}