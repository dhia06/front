import { PieceVue } from "../Models-SD/PieceVue";
import { Client } from "./client";

export class Projet {
    id: number;
    titre : string;
    surface: string;
    extension: string;
    typebien: string;
    gamme: string;
    delai: string;
    path: string;
  Devis?:number;
  UserEntity:Client[];
 
    // userEntityId: number;
    }
  