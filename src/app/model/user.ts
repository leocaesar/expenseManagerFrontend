export interface User {
    id: number;
    username: string;
    password: string;
    
}

export class UserModel {
    constructor(
        public username : string,
        public password : string,
    ){}
}