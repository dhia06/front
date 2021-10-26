import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApitaskService } from '../Dashboard-Admin/services/apitask.service';
import { Travailmodel } from '../Models/Travailmodel';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../Espace-Client/projet-ma/projet-service';
import { AccessoiresProjet } from '../Models-SD/AccessoiresProjet';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { Projet } from '../Models/Projet';
import Swal from 'sweetalert2';
import { ApiAvoir } from '../Dashboard-Admin/services/api.avoir';
import { AccessoiresVue } from '../Models-SD/Accessoires-Vue';
import { Avoir } from '../Models/avoir';
import { LoginService } from '../Authentification/logginpro/login.service';
import { MatDialog } from '@angular/material/dialog';
import { MyAlertDialogComponent } from '../my-alert-dialog/my-alert-dialog.component';
import { RdvService } from '../rdv/rdv.service';
// import { ProjetService } from '../nv-projet/projet.service';



@Component({
  selector: 'app-repondre-app-doffres',
  templateUrl: './repondre-app-doffres.component.html',
  styleUrls: ['./repondre-app-doffres.component.scss']
})
export class RepondreAppDoffresComponent implements OnInit {
  message = '';
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts: any;
  startIndex = 0;
  endIndex = 5;
  data$: Observable<any>;


  OnLogout() {
    this.userService.logout();
  }
  // isAdmin():Boolean{
  //   if (this.role) //this.roles== undefiened

  //   return (this.role.indexOf('admin') >-1) ;

  //  else{
  //      return false;
  //  }

  //   }

  // isAdmin():Boolean{
  //   let currentUser= localStorage.getItem('user');

  //   if (user.role.indexOf('admin') >-1) //this.roles== undefiened
  //  { this.router.navigate(['/dashboard'])

  //   }
  // }

  editField1: string;
  editField2: string;
  editField3: string;
  editField4: string;
  editField5: string;

  summ = 0;
  sum1 = this.summ;
  bool = false;
  zaza: any;


  hidden = false;

  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;
  quest1 = false;

  isPro(): Boolean {
    const currentp = localStorage.getItem('token').indexOf('admin');
    if (currentp > -1) {
      this.quest1 = true;
    };
    return (currentp > -1)
  }

  tester=false;
  unregister(elementid){
    Swal.fire({
      animation: false,
    //  title: 'Prix des articles',
      title: '<div style:"color:pink;">BORDEREAU DES PRIX</div>',
      //imageUrl: './assets/images/client/verification.gif',
      imageAlt: 'original',
      width: 300,
    // input: 'number',
      customClass: {
        popup: 'animated tada',
        validationMessage: 'my-validation-message'
      },
    
      imageHeight: 340,
      padding: '2em',
      // background: '#fff url(./assets/images/client/blanc.jpg)',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Valider!',
      backdrop: `
      rgba(0,0,123,0.4)
      url("./assets/images/client/verification.gif")
      left top
      no-repeat
        
      
        <!-- Include the Material Ui theme --> `,
      html: `
        <form>
        <label for='prix'>Entrez le prix de cet article

       SVP!</label>
       
        <input required type="number" placeholder="prix"  id="prix" class="swal2-input">
        </form>
        `,
      focusConfirm: false,
      preConfirm: () => {
         this.tester=true;
     this.all.prix= (<HTMLInputElement>document.getElementById('prix')).value;
   //  <div style="color: rgb(97, 97, 238); font-size:18px" >"Chaudière à plaquettes"</div>
    // this.all.name= (<HTMLInputElement>document.getElementById('name')).value;
   //  console.log("ggggg",this.all.name);
     console.log("ffffffffffff",this.all.prix);

     elementid.prix=this.all.prix;

   //  elementid.name=this.all.name;
     console.log("kaaaaaaaaaka00",this.all.name);
   //  console.log("kaaaaaaaaaaaaaaaaaaaaaaaaaaaka00",elementid.name);
    
     console.log("apesssss",elementid.prix);
    
          Swal.fire({
    
            customClass: { popup: 'animated tada' },
            animation: false,
    
            icon: 'success',
            title: 'Ton Prix a eté ajouté',
            showConfirmButton: false,
            timer: 1500
          })
    
      
    
      }
    })}

  // unregister() {
  //   let dialogRef = this.dialog.open(MyAlertDialogComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
  //     if (result == 'confirm') {
  //       console.log('Unregistered');
  //     }
  //   })
  // }








  send() {
    this.rdvserv.repondreappoffre(this.email).subscribe(
      (success) => {
        console.log(success)
      },
      (erreur) => {
       console.log(erreur)
      }
    ); 
    const currentp = localStorage.getItem('token').indexOf('professionnel');
    // if (currentp > -1) {
    //   this.quest1 = true;
    // };


    this.hidden = true;

    const doc = new jsPDF('p', 'pt', '');

    const pdfTable = this.pdfTable.nativeElement;

    doc.html(pdfTable, {
      callback: function (doc) {
        doc.save('App.pdf');
        

      }
    });


  }





  changeValue(id: string, property: string, event: any, element: Avoir) {

    let summ = 0
    for (let j = 0; j < this.all.length; j++) {
      summ += Number(this.all[j].prix);
      this.zaza = summ;
      console.log("non edited", summ);
    }
    this.editField1 = event.target.textContent;
    console.log("see what van ancien ", Number(element.prix));
    console.log("see what van", this.editField1)

    this.zaza = Number(this.editField1) + this.zaza - Number(element.prix);
    console.log("finaalll", this.zaza);
  }









  changeValue1(id: string, property: string, event: any, element: Avoir) {

    this.editField1 = event.target.textContent;
    this.bool = true;
   // console.log("777733777::::", this.all.length)
    console.log("ddd1111", this.editField1)
    console.log("ddd1111222", Number(this.editField1) + this.summ)
    console.log("accccccccc2222", element.id);
    console.log("hvhjchnkd", element.prix);
    this.sum1 = Number(this.editField1) + this.summ;
    console.log("sum11", this.sum1)

  }

  see = true;
  sum2 = this.sum1;
  changeValue2(id: string, property: string, event: any, acc: AccessoiresVue) {
    this.editField2 = event.target.textContent;
    this.see = false;
    // this.sum2=this.sum1
    console.log("summ au deb", this.sum2)
    //this.sum1=this.sum2;
    console.log("hvhjchnkd", this.sum1);
    this.sum2 = Number(this.editField2) - acc.Prix + this.sum1;
    //this.sum1=this.sum2;
    console.log("suuum222", this.sum2)
    console.log("summ111", this.sum1)

  }


  ayhaja: any;


  getArrayLenght(length) {
    return new Array(length / 20)
  }
  getIndex(pageIndex) {
    this.startIndex = pageIndex * 5;
    this.endIndex = this.startIndex + 5;
    console.log(this.startIndex);
  }
  prevIndex(length) {
    this.startIndex = length * 0;
    console.log(this.startIndex)
  }
  nextIndex(endIndex) {
    this.endIndex++
    console.log(this.endIndex)
  }
   public all: any;
  //private all: Avoir = new Avoir();
  P: Projet;


  prje: Projet[];

  retrieveAvoir(): void {
    this.apiavoir.getProjectById(Number(this.id)).subscribe((projet) => {
      console.log("projet=======", projet.id);
      const prj = new Projet;

      prj.id = projet.id;
      this.apiavoir.readAvoir(prj).subscribe((data: any) => {

        this.all = data;
        console.log("myyddata", JSON.stringify(this.all));

        // console.log("data", data[0].prix);
        // console.log("allll", this.all[0].prix);


        (erreur) => {
          console.log("I m wrong", erreur)
        }
      });

    });
  }
  tot = 0;








  calculate(acc) {
    this.tot += acc.Prix
    console.log("3aaaaaaaa", this.tot);
  }
  constructor( private rdvserv: RdvService,private dialog: MatDialog,public userService: LoginService,private http: HttpClient, 
    private apiavoir: ApiAvoir, private service: ProjetService, 
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute, private router: Router) { }
  public listprojects: any
  id: string;
  listpieces: any;
  email:string;
  kk: any;
  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log("blaaefff1111", Number(this.id));
    this.retrieveAvoir();

    // this.service.retrieveAccessoiri().subscribe((result) => {
    //   this.activatedRoute.params.subscribe((params) => {
    //     this.service.findPieceProjetByProjetId(+params.id).subscribe((listpieces: any) => {

    //       (this.listpieces = listpieces);

    //       this.kk = this.listpieces.map
    //         (e => e.AccessoiresProjet.map
    //           (b => this.listpieces = b.accessoires  ) )
    //       if (this.bool = true) {
    //         for (let i = 0; i < 5; i++) {
    //           for (let j = 0; j < this.kk[i].length; j++) {
    //             this.summ += this.kk[i][j].Prix;
    //             console.log("non edited", this.summ);
    //             this.sum1 = this.summ;
    //             this.sum2 = this.sum1;
    //           }
    //         }
    //       }
    //       if (this.bool = false) {
    //         this.summ += Number(this.editField1);
    //         console.log("editeed", this.summ);
    //         this.sum1 = this.summ;
    //         this.sum2 = this.sum1;

    //       }

    //     }
    //     );
    //   });
    // });

    this.data$ = this.http.get('https://jsonplaceholder.typicode.com/posts')
    this.dtOptions = {
      processing: true
    };

  }


  details(personne: Projet) {
    this.router.navigate(['/dashboard/app-doffres/details/', personne.id]);
  }


  fonction(acc: AccessoiresVue) {
    Swal.fire({
      animation: false,
      title: 'Prix des articles',
      imageAlt: 'original',
      width: 300,
      customClass: {
        popup: 'animated tada',
        validationMessage: 'my-validation-message'
      },

      imageHeight: 300,
      padding: '3em',
      // background: '#fff url(./assets/images/client/blanc.jpg)',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Confirmer!',
      backdrop: `
      rgba(0,0,123,0.4)
      url("./assets/images/client/verification.gif")
      left top
      no-repeat
        
      
        <!-- Include the Material Ui theme --> `,
      html: `
        <form>
        <label for='{{acc.Prix}}'>Entrez votre prix SVP!</label>
       
        <input required type="number" placeholder="priiiix" 
         id="prix" class="swal2-input">
        </form>
        `,
      focusConfirm: false,
      preConfirm: () => {
        // avoir.prix = (<HTMLInputElement>document.getElementById('prix')).value;
        // avoir.accessoiresId = acc.id;

        console.log('acccccccccc', acc.id);


        Swal.fire({

          customClass: { popup: 'animated tada' },
          animation: false,

          icon: 'success',
          title: 'Ton Prix a eté ajouté',
          showConfirmButton: false,
          timer: 1500
        })




      }
    })
  }




}

//   hidden = false
//   categorie: any
//   displayedColumns: any[] = ['nbre','acc', 'actions'];
//   dataSource: any ;

//   travaux: Travailmodel = new Travailmodel();

//   accr:any;
//   id: string;
//   kk:any;
//   public listpiece: PieceProjet[];
//   listaccessoires: AccessoiresProjet[];

//   constructor(private http: HttpClient, private service: ProjetService, private activatedRoute: ActivatedRoute,
//     private route: ActivatedRoute, private router: Router,private apiTravaux: ApitaskService) { }

//     readProjets(): void {
//       this.service.readPieceProjets().subscribe(
//         (data: any) => {

//           this.listpiece = data;
//           console.log(data);

//         });}

//   ngOnInit(): void {
//     this.id = this.route.snapshot.paramMap.get('id');


//   this.service.retrieveAccessoiri().subscribe((result) => {
//    this.activatedRoute.params.subscribe((params) => {
//      this.service.findPieceProjetByProjetId(+params.id).subscribe((dataSource: any) => {

//     (dataSource = dataSource);



// //  (this.dataSource = result);

//     console.log("first",dataSource[0].AccessoiresProjet.accessoires);
//     console.log("second",dataSource[0]);
//     console.log("000",dataSource[0].AccessoiresProjet[0].accessoires.nom);
//     console.log("11",dataSource[0].AccessoiresProjet[1].accessoires.nom);
//     console.log("22",dataSource[0].AccessoiresProjet[2].accessoires.nom);
//     console.log("11111111111",dataSource[1]);

//    console.log("resuuulllllllllllllllllllllt",result);
// console.log("pzraaaam",params)





// //  (this.dataSource=result.map

// //   (e => e.AccessoiresProjet.map
// //     (b =>this.dataSource=b.accessoires)
// //     ));

//       // (e => e.AccessoiresProjet.map
//       //  (b =>this.accr=b.accessoires)
//       //  )

//       // (e => e.AccessoiresProjet.map
//       //   (b =>b.accessoires.forEach(element => {
//       //   element.nom
//       //   })
//       //   )
//       //   )

//        }
//      );
//       });
//     });
//  }


//   selectService(travaux) {
//     this.hidden = true;
//     console.log(this.hidden)
//     this.travaux = travaux;
//     console.log(JSON.stringify(this.dataSource))
//   }

//   //cette fonction permet d'ajouter un travail
//   createTravaux(f) {
//     this.apiTravaux.createTravaux(f.value).subscribe((result) => {
//       console.log(result);
//     });

//   }
//   //cette fonction permet de supprimer un travail
//   deletetask(id) {
//     this.apiTravaux.deletetask(id).subscribe((result) => {
//       console.log(result);
//       this.ngOnInit()
//     });
//   }
//   //cette fonction permet de modifier un travail
//   updatetask(f) {
//     f.value.id = this.travaux['id'];
//     this.apiTravaux.updatetask(f.value).subscribe((result) => {
//       console.log(result);
//     });
//   }

// }

