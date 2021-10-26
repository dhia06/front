import { Guser } from "./guser";
import { Role } from "./role";

export class User extends Guser{

    plainTextPassword: string;
    registration: number;
    postal: number;
    company: string;
    bic: number;
   // salt: string;
    statut: string;
    // id: number;
    // lastname: string;
    // firstname: string;
    // email: string;
    // password: string;
    // datedenaissance: Date;
    // address: string;
    // number: number;
    role: Role.professionnel;
    token?: string;
  code:string;
    confirmed: string;
    constructor(){
      super();
    }
  }
  