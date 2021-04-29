import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Travailmodel } from "../../Models/Travailmodel";
import { HttpClient } from '@angular/common/http';
import { Travaildetailleemodel } from "../../Models/Travaildetailleemodel";



const API_LINK = 'http://localhost:3000/create';
@Injectable({
  providedIn: 'root'
})
export class AddTravaildetService {
    constructor(  private http: HttpClient) { }

 allTravaux(): Observable<Travailmodel[]> {
    return this.http.get<Travailmodel[]>('http://localhost:3000/task');   }
   

    addTravaildet(trv: any) {
        return this.http.post('http://localhost:3000/taskd/create', trv);
      }
}