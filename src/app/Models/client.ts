import { Guser } from "./guser";
import { Role } from "./role";

export class Client extends Guser{


    username: string;
    
    
    role: Role.client;
    code:string;
}