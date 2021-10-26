import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessoiresVue } from '../Models-SD/Accessoires-Vue';
import { AccessoiresProjet } from '../Models-SD/AccessoiresProjet';
import { PieceProjet } from '../Models-SD/PieceProjet';


@Injectable({
  providedIn: 'root'
})
export class AccessoiresProjetService {


  constructor(  private http: HttpClient) { }




  
  public Addaccprix(acc: AccessoiresVue){
    return this.http.put<AccessoiresVue>(`http://localhost:3000/accessires/update/`+acc.id, acc);
  }










  addAccessoiresParProjet(acc: any) {

    return this.http.put('http://localhost:3000/AccProjet/'+acc.idpiece+'/'+acc.idaccessoiresvue, acc);
  }

  addPieceParProjet(piece: any) {

    return this.http.put('http://localhost:3000/PieceProjet/'+piece.idprojet+'/'+piece.idpiecevue, piece);
  }
  
 findmyproject(idprojet:number,idpiecevue:number) {

    return this.http.get<PieceProjet>('http://localhost:3000/PieceProjet/find/'+idprojet+'/'+idpiecevue);
  }


 AllAccessoires() {

    return this.http.get<AccessoiresVue>('http://localhost:3000/accessires');
  }
  
  // allTypes(nom: string){
  //   return this.http.get<TypesVue[]>('http://localhost:3000/gammess/see/'+nom);   }
}
