import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../Authentification/logginpro/login.service';
import { GammeVueService } from '../Dashboard-Admin/services/GammeVue.service';
import { ListService } from '../list/liste.service';

import { AccessoiresVue } from '../Models-SD/Accessoires-Vue';
import { AccessoiresProjet } from '../Models-SD/AccessoiresProjet';
import { GammeVue } from '../Models-SD/GammeVue';
import { PieceProjet } from '../Models-SD/PieceProjet';
import { PieceVue } from '../Models-SD/PieceVue';
import { PrestationVue } from '../Models-SD/PrestationVue';
import { TypesVue } from '../Models-SD/TypesVue';
import { Article } from '../Models/Article';
import { Projet } from '../Models/Projet';
import { ProjetService } from '../nv-projet/projet.service';
import { AccessoiresProjetService } from '../step-one/AccessoiresProjet.service';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent implements OnInit {
projets:Projet[];
count=1;
  @Output() sendRequest5 = new EventEmitter();

hidden=false;
  loc:number;
  id:string;
quest3=true;

date = new Date();

fctmoins(){
  this.count=this.count-1
}

fctplus(){
  this.count=this.count+1
}






  setBody5 = () => {
    var trs = "";
    const setTd = (obj) => {
      let td = "";
      Object.values(obj).forEach(v => td += `<td>${v}</td>`);
      return td;
    }
    this.Property5.forEach(object => {
      trs += `<tr>${setTd(object)}</tr>`
    });
    return trs;
  }

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  sendEvent5(prj:Projet){
    this.hidden=true;
 let cc;
    const doc = new jsPDF('p', 'pt', '');
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
  
//     const content =  `
//      <table>
//      <tbody>
     
// <div id="pdfTable" #pdfTable class="pdfTable" *ngIf="!isHidden" >
//   <div class="center">Projet {{projet.titre}}</div>
//   <br>
// <span>
// Devis estimatif et quantitatif des travaux de construction
// d une maison d habitation </span>
// <br>
// C'est un projet de construction d'un(e) {{projet.typebien}} de gamme {{projet.gamme}}<br>
//  composé(e) de {{projet.extension}} qui ne doit pas dépasser {{projet.delai}}

// <!-- <li *ngFor="let projet of projects"> -->


// <br>


// {{Property5[1]}}
// <br>
// {{Property5[2]}}
// <br>
// {{Property5[3]}}
// <br>
// {{Property5[4]}}
// <br>
// {{Property5[5]}}
// <br>
// {{Property5[6]}}
// <br>
// {{Property5[7]}}
// <br>


// TOTAL HT : {{FilsProperty5}}
// </div>
//      </tbody>
//    </table>`

const pdfTable = this.pdfTable.nativeElement;

 doc.html(pdfTable,{callback: function (doc) {doc.save('Accessoires.pdf');

    // doc.html(content, {
    //   callback: function (doc) {
    //     doc.save('Accessoires.pdf');
    }
    });
  
    this.sendRequest5.emit(this.FilsProperty5); 
   }


  @Input() FilsProperty5;
  allaccessoires: any[];
  @Input() categorie;
  all: GammeVue[];
  types: TypesVue[];
  pieces: PieceVue[];
  Prestation: PrestationVue[];
  public stepFiveForm: FormGroup;
  
  constructor(private serviceprojet: ProjetService, private fb: FormBuilder,private gammeservice: GammeVueService,
    public userService: LoginService,private activatedRoute: ActivatedRoute
    , private accprojetservice:AccessoiresProjetService,
    private router: Router, private service:ListService, private http: HttpClient ,private route: ActivatedRoute) { 
  }







  @Input() article: Article;

  @Input() projet: Projet;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("janjouuuuun",this.id)
    this.retrieveGammes();
    
    this.stepFiveForm = this.fb.group({
      itemst: this.fb.array([ this.createItemt() ]),


    });    console.log("alooooo",this.projet)
    this.activatedRoute.params.subscribe((params) => {
    this.service.findById(+params.id).subscribe(
      (projet) =>
             
    (this.projet = projet),
        
        
      (erreur) => this.router.navigate(['/'])
  
  );
     console.log("seyyyyyyy",JSON.stringify(params))
   //  console.log("seyyyyyyyvvvvvvv",JSON.stringify(params.ti))

   });

  }


  test(){
    
    Swal.fire({
      html:''+this.FilsProperty5+'TND',
      icon: 'info',
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Parfait !',
    confirmButtonAriaLabel: 'Thumbs up, Parfait !',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
      title: 'Votre devis estimatif est: ',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      preConfirm: () => {
        return this.FilsProperty5
      }

    })
    console.log(this.FilsProperty5)
    //return this.categorie*this.superficie
  }

createItemt(): FormGroup {
 return this.fb.group({
 categorie: [],
  accessoires: [],

 });
}
  retrieveGammes() {
    this.gammeservice.allGammes().subscribe(
      (data: any) => {
        this.all = data;
        console.log(data);
      });
    return (this.all)
  }

  images = [
    "https://64.media.tumblr.com/7f978f40d78c0b935f3702cab36a86da/tumblr_o54fy5gqQz1u60tx6o1_1280.jpg",
    "",
    "https://64.media.tumblr.com/bd8500f5c75a4a2ee825f18c860459c7/tumblr_o3pbd0PUCo1u60tx6o1_1280.jpg"
  ];
total=0;
see(pres){
  if(pres.checked=='Terrasse'){
console.log("yhhhhhhiis")

this.all.forEach((gamme) => {
  if (gamme.name == 'Standing') {
    this.types = gamme.Types;  
    if(gamme.Types[1].pieces[0].Prestation[0].nom=="Terrasse"){
      this.allaccessoires1= gamme.Types[1].pieces[0].Prestation[0].accessoires;
      console.log("hnee² :",this.allaccessoires1);
      }
this.types.forEach((type) => {
  if (type.nom == 'exterieur') {
    this.pieces = type.pieces;
    console.log("type:", type.pieces)
  

    this.pieces.forEach((piece) => {
     console.log("tvvvvvvvv" ,piece.Prestation );
      if (piece.nom == 'Terrasse et exterieur') {
     
        this.Prestation =gamme.Types[1].pieces[0].Prestation ;
        console.log("terraaaaaaaaaaaa" ,piece.Prestation );
      this.Prestation.forEach((pres) => {

        });      }
});
console.log("type du gamme 33333:", gamme.Types)

}
});


}
} )

  }else{


};




}

@Input() Property5;
@Output() send5 = new EventEmitter();
info = new Projet();


sendlista4(){
this.send5.emit(this.Property5);
console.log("fffffffffffffffffffffffffffffffffffffff",this.Property5);
this.info.Devis=this.FilsProperty5;
console.log("show me devis",this.info.Devis);
console.log("show me infooooooooooo",this.info);
let kk= parseInt(this.id);
console.log("kkkkkkkkkkk",kk);
this.serviceprojet.Fix(kk,this.info).subscribe(
  (success) =>{
    console.log(success)
   },
  (erreur) => {
    console.log(erreur)
  } );

}

public Devis: number;

submit() { 
  
  this.Devis=this.FilsProperty5;
  console.log("show me devis",this.Devis);
  console.log("show me propertyyyyy",this.FilsProperty5);

  this.serviceprojet.addProjet(this.Devis).subscribe(
    (success) =>{
      console.log(success)
     },
    (erreur) => {
      console.log(erreur)
    } );
}











  Calculate(cat){
    if(cat.checked){
      this.FilsProperty5+= parseInt(cat.Prix); 
      //  this.FilsProperty5+= parseInt(cat.Prix)*this.count; 
       this.Property5.push(cat.ArticleEntity.name,cat.Prix,this.count);
      //  this.lista.push(cat.nom);
    }else{
       this.FilsProperty5-= parseInt(cat.Prix);}
      
    console.log("nom :",cat.ArticleEntity.name);
    console.log("Cout estimatif :",this.FilsProperty5);
  
  };

  @Input() itemst: FormArray;
  get formDatat() { return <FormArray>this.stepFiveForm.get('itemst'); }
  allaccessoires1: AccessoiresVue[];
  allaccessoires2: AccessoiresVue[];
  allaccessoires3: AccessoiresVue[];
  allaccessoires4: AccessoiresVue[];
  gamme:GammeVue[];


  state: string = 'unchecked';
  checkBoxes=[1,2,3]

  toggleMove(e) {
    console.log
      if(e.target.checked){        
        this.state = 'checked' 
        
      } else {
        this.state = 'unchecked'
      }
      
  }



  GetAccessoires($event){
    this.all.forEach((gamme) => {
      if (gamme.name == 'Standing') {
        this.types = gamme.Types;

        
        if(gamme.Types[1].pieces[0].Prestation[0].nom=="Terrasse"){
          this.allaccessoires1= gamme.Types[1].pieces[0].Prestation[0].accessoires;
          console.log("hnee² :",this.allaccessoires1);
          // console.log("kaaaaaaaaaaa :",this.result);
          }
          
 
 
         if(gamme.Types[1].pieces[0].Prestation[1].nom=="Allée"){
           this.allaccessoires2= gamme.Types[1].pieces[0].Prestation[1].accessoires;
        
           }              
         if(gamme.Types[1].pieces[0].Prestation[2].nom=="Allée"){
       
 
           this.allaccessoires3= gamme.Types[1].pieces[0].Prestation[2].accessoires;
           console.log("Cloture :",this.allaccessoires3);
           }
           if(gamme.Types[1].pieces[0].Prestation[3].nom=="Portail"){
            this.allaccessoires4= gamme.Types[1].pieces[0].Prestation[3].accessoires;
            console.log("Portail :",this.allaccessoires4);
            }

    this.types.forEach((type) => {
      if (type.nom == 'exterieur') {
        this.pieces = type.pieces;
        console.log("type:", type.pieces)
      

        this.pieces.forEach((piece) => {
         console.log("tvvvvvvvv" ,piece.Prestation );
          if (piece.nom == 'Terrasse et exterieur') {
         
            this.Prestation =gamme.Types[1].pieces[0].Prestation ;
            console.log("terraaaaaaaaaaaa" ,piece.Prestation );
          this.Prestation.forEach((pres) => {

          if (pres.piecesid == piece.id && piece.typeid ==type.id.toString() && type.gammeid == $event.value ) {
      this.allaccessoires1 =gamme.Types[1].pieces[0].Prestation[0].accessoires ;

                }
            });      }
    });
    console.log("type du gamme 33333:", gamme.Types)
 
  }
});


}
 } )};


 CreateAccessoirepiece(cat){
  if(cat.checked){
    this.accprojetservice.findmyproject(parseInt(this.id),this.loc).subscribe((result)=>{
      console.log("seeeeeeeresultttttttttt",result);
 
    console.log("idcalculate:"+cat.id);
  const acc = new AccessoiresProjet();
  acc.idpiece = result.id;
  console.log("l id checkééééé",cat.id)
  acc.idaccessoiresvue = cat.id;
  
 // acc.idprojet =  parseInt(this.id);
  console.log("l id checkééééé2222222", acc.idaccessoiresvue )

  this.accprojetservice.addAccessoiresParProjet(acc).subscribe((result)=>{
    console.log(result);
  });
});

  }
}







  GetCategoryDropdown($event) {
    this.all.forEach((gamme) => {
       if (gamme.id == $event.value) {


        const piece = new PieceProjet();
        if ($event.value ==  11) {
          piece.idpiecevue = 14;
          console.log("je suis Standing");}
          if ($event.value == 10 ) {
            console.log("je suis hautstanding");
            piece.idpiecevue = 13;}
            if ($event.value == 12 ) {
              console.log("je suis Normal");
              piece.idpiecevue = 15;}
             console.log("tastiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiit",piece.idpiecevue);
             this.loc = piece.idpiecevue;
        
;
        piece.idprojet =  parseInt(this.id);
      
        piece.nbr =this.count;
      
        
        this.accprojetservice.addPieceParProjet(piece).subscribe((result)=>{
          console.log("hhhh",result);
       
          
          console.log("id du projet",piece.idprojet);
          console.log("id du piece vue",piece.idpiecevue);
        });
        console.log("id du piece paliiiiiz",piece.id);

























        this.types = gamme.Types;
         console.log("gggg", gamme);
 
         if(gamme.Types[1].pieces[0].Prestation[0].nom=="Terrasse"){
          this.allaccessoires1= gamme.Types[1].pieces[0].Prestation[0].accessoires;
          console.log("hnee² :",this.allaccessoires1);
          }
                if(gamme.Types[1].pieces[0].Prestation[1].nom=="Allée"){
           this.allaccessoires2= gamme.Types[1].pieces[0].Prestation[1].accessoires;
           console.log("allee :",this.allaccessoires2);
        
           }              
         if(gamme.Types[1].pieces[0].Prestation[2].nom=="Cloture"){
           this.allaccessoires3= gamme.Types[1].pieces[0].Prestation[2].accessoires;
           console.log("Cloture :",this.allaccessoires3);
           }
 
           if(gamme.Types[1].pieces[0].Prestation[3].nom=="Portail"){
            this.allaccessoires4= gamme.Types[1].pieces[0].Prestation[3].accessoires;
            console.log("Portail :",this.allaccessoires4);
            }
 
         this.types.forEach((type) => {
           if (type.nom == 'exterieur') {
             this.pieces = type.pieces;
             console.log("type:", type.pieces)
           

             this.pieces.forEach((piece) => {
              console.log("tvvvvvvvv" ,piece.Prestation );
               if (piece.nom == 'Terrasse et exterieur') {
              
                 this.Prestation =gamme.Types[1].pieces[0].Prestation ;
                 console.log("terraaaaaaaaaaaa" ,piece.Prestation );
               this.Prestation.forEach((pres) => {
 
               if (pres.piecesid == piece.id && piece.typeid ==type.id.toString() && type.gammeid == $event.value ) {
           this.allaccessoires2 =gamme.Types[1].pieces[0].Prestation[0].accessoires ;
          //          console.log("accessoireeeeeeeeee :", this.allaccessoires)
                     }
                 });      }
         });
         console.log("type du gamme 33333:", gamme.Types)
      
       }
     });




     
     console.log("klima sghira :", $event.value);
 
   
   }
 }); }

}
