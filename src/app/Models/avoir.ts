import { AccessoiresVue } from "../Models-SD/Accessoires-Vue";
import { User } from "./user";

export class Avoir {
    id?: number;
    accessoiresId?: number;
//guserId?: string;
   // unite?: string;
    prix?: string;
    UserP:User[];
  //static prix: string;
  accessoires:AccessoiresVue[];
   
    }