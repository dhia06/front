import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../Espace-Client/projet-ma/projet-service';
import { AccessoiresProjet } from '../Models-SD/AccessoiresProjet';
import { PieceProjet } from '../Models-SD/PieceProjet';

@Component({
  selector: 'app-visualiser-app-doffres-pro',
  templateUrl: './visualiser-app-doffres-pro.component.html',
  styleUrls: ['./visualiser-app-doffres-pro.component.scss']
})
export class VisualiserAppDoffresProComponent implements OnInit {
  accr:any;
  id: string;
  kk:any;
  public listpiece: PieceProjet[];
  listaccessoires: AccessoiresProjet[];
  
  // personne: PieceProjet = null;

  constructor(private http: HttpClient, private service: ProjetService, private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.activatedRoute.params.subscribe((params) => {
      this.service.findPieceProjetByProjetId(+params.id).subscribe(
  
        (listpiece) => {
               
         (this.listpiece = listpiece), 
         
         

         console.log("ggggggggggggg",this.listpiece.map
         (e => this.listaccessoires=e.AccessoiresProjet
          ));




     this.kk=this.listpiece.map
         (e => e.AccessoiresProjet.map
          (b =>this.accr=b.accessoires



           )
          )

          console.log("ttttttt111111",this.kk);
          console.log("ttttttt2222",this.kk[0]);
          console.log("ttttttt33333333",this.kk[1]);







        //  console.log("showww22222222",this.listpiece);

     //  <td> {{ pp.AccessoiresProjet[0].accessoires[0].nom }} </td>
      //    console.log("showww11111",this.listpiece.forEach(a =>{
         
      //     a.AccessoiresProjet=this.listaccessoires
      //   })
      //  );
       

  // // //         console.log("showww11111",this.listpiece[0].AccessoiresProjet);
  // console.log("piece1+acc1",this.listpiece[0].AccessoiresProjet[0].accessoires.nom);
  // console.log("piece1++acc22",this.listpiece[0].AccessoiresProjet[1].accessoires.nom);
  // console.log("piece2+acc1",this.listpiece[1].AccessoiresProjet[0].accessoires.nom);
  // console.log("piece2+acc2",this.listpiece[1].AccessoiresProjet[1].accessoires.nom);
      
           (erreur) => this.router.navigate(['/new'])




            }         
            
            );

          });
          

  //       }
    // this.activatedRoute.params.subscribe((params) => {
    //   this.service.retrieveAccessoire(+params.id).subscribe(
       
    //     (listaccessoires) => {(this.listaccessoires = listaccessoires),
    //       console.log("jjjjjjppppp",this.listaccessoires);
    //     (erreur) => this.router.navigate(['/new'])
    //      } );
    // });
  // this.retrievePiecesProjet(parseInt(this.id));



  

  }



  retrievePiecesProjet(id: number): void {
    this.service.findPieceProjetByProjetId(id).subscribe(
      (data: any) => {
        this.listpiece = data;
        console.log(data);
      });
  }

  retrieveAccessoireProjet(): void {
    this.service.retrieveAccessoiri().subscribe(
      (data: any) => {
        this.listaccessoires = data;
        console.log(data);
      }); }


  backthen() {
    this.router.navigate(['/dashboard/app-doffres']);
  }

}



