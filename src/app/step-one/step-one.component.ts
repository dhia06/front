
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { accessoiresVueService } from '../Dashboard-Admin/services/accessoiresVue.service';
import { GammeVueService } from '../Dashboard-Admin/services/GammeVue.service';
import { prestationVueService } from '../Dashboard-Admin/services/prestationVue.service';
import { TypesVueService } from '../Dashboard-Admin/services/TypesVue.service';
import {jsPDF} from 'jspdf';
import  html2canvas  from 'html2canvas';
import { AddServiceService } from '../Dashboard-Admin/ServicesAddArticle/addservice.service';
import { AccessoiresVue } from '../Models-SD/Accessoires-Vue';
import { GammeVue } from '../Models-SD/GammeVue';
import { PieceVue } from '../Models-SD/PieceVue';
import { PrestationVue } from '../Models-SD/PrestationVue';
import { RemplissageDto } from '../Models-SD/RemplissageDto';
import { TypesVue } from '../Models-SD/TypesVue';
import { Gamme } from '../Models/gamme';
import { AccessoiresProjetService } from './AccessoiresProjet.service';
import { AccessoiresProjet } from '../Models-SD/AccessoiresProjet';
import { Projet } from '../Models/Projet';
import { ActivatedRoute, Router } from '@angular/router';
import { PieceProjet } from '../Models-SD/PieceProjet';
import { piecesVueService } from '../Dashboard-Admin/services/piecesVue.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})


export class StepOneComponent implements OnInit {
  sampleData = [{
    name: "Arif",
    email: "arif@gmail.com",
    country: "India"
  }, {
    name: "Manogya",
    email: "Manogya@gmail.com",
    country: "India"
  },
  {
    name: "Avishek",
    email: "Avishek@gmail.com",
    country: "India"
  },
  {
    name: "Radikha",
    email: "Radikha@gmail.com",
    country: "Srilanka"
  }
];


setTitle = () => {
  var tds = "";
  Object.keys(Object.assign({}, ...this.sampleData)).forEach(label => {
    tds += `<th>${label}</th>`
  });
  return tds;
}
setTitle2 = () => {
  var tds = "";
  Object.keys(Object.assign({}, ...this.lista)).forEach(label => {
    tds += `<th>${label}</th>`
  });
  return tds;
}

setBody = () => {
  var trs = "";
  const setTd = (obj) => {
    let td = "";
    Object.values(obj).forEach(v => td += `<td>${v}</td>`);
    return td;
  }
  this.sampleData.forEach(object => {
    trs += `<tr>${setTd(object)}</tr>`
  });
  return trs;
}
setBody2 = () => {
  var trs = "";
  const setTd = (obj) => {
    let td = "";
    Object.values(obj).forEach(v => td += `<td>${v}</td>`);
    return td;
  }
  this.lista.forEach(object => {
    trs += `<tr>${setTd(object)}</tr>`
  });
  return trs;
}
  public downloadPDFp() {
    const doc = new jsPDF('p', 'pt', 'a4');

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content =  `<table>
   <thead>
    <tr>
       ${this.setTitle()}
    </tr>
    </thead>
    <tbody>
   		${this.setBody()}
    </tbody>
  </table>`
  doc.html(content, {
    callback: function (doc) {
      doc.save();
    },
  });
    doc.save('test.pdf');
  }
  typeId: number;
  @Input() categorie;
  nom: any;
  x:RemplissageDto[];
  all: GammeVue[];
  types: TypesVue[];
  pieces: PieceVue[];
  Prestation: PrestationVue[];
  allaccessoires1: AccessoiresVue[];
  allaccessoires2: AccessoiresVue[];
  allaccessoires3: AccessoiresVue[];
  allaccessoires: AccessoiresVue[];
  public stepOneForm: FormGroup;
  public stepTwoForm: FormGroup;
  @Input() name;
  constructor(private fb: FormBuilder, private gammeservice: GammeVueService, private accessoiresservice: accessoiresVueService,
    private typeservice: TypesVueService , private prestationservice : prestationVueService,
    private accprojetservice:AccessoiresProjetService,private route: ActivatedRoute) {
  }
  id:string
  piecee :PieceProjet
  ngOnInit(): void {
    
    // console.log("id du piece paliiiiiz",this.piecee.id);
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("3333333",this.id)
    
  console.log("aseeeeeeeeeeeeeeeeeeeeeeeemounnnnntttid:"+this.amount);
 console.log("ssssssss :",this.FilsProperty);
    this.retrieveGammes();

    this.stepOneForm = this.fb.group({

      itemst: this.fb.array([ this.createItemt() ]),
    });
    
  }

  
  @Input() itemst: FormArray;
  get formDatat() { return <FormArray>this.stepOneForm.get('itemst'); }



  addItemt(): void {
    this.itemst = this.stepOneForm.get('itemst') as FormArray;
    this.itemst.push(this.createItemt());
    
    this.sendRequest.emit(this.total);
   }





   createItemt(): FormGroup {
    return this.fb.group({
surface:[],
    categorie: [],
     accessoires: [],
 
    });
  }














 
  get f() { return this.stepOneForm.controls; }
  get t() { return this.f.tickets as FormArray; }
  @Input() total : number=0;
  @Input() FilsProperty;
  @Input() lilo;
  @Output() sendRequest = new EventEmitter();
  @Output() send = new EventEmitter();

  

  
  sendEvent(){
    this.sendRequest.emit(this.total); 
    console.log("whattttt i m searchiiing",this.total)
   }

   sendlista(){
     
   this.send.emit(this.lista);
   }


 proj:Projet
 metho($event){
  this.proj = $event ;
  console.log("tttttttti",this.proj.titre)
 }

lista=[{}];
amount=[];
  onChange() {
    this.lista=[];
        this.lista.push(this.fb.group({
          categorie: [],
          accessoires: [],
        }));
    
}


  onChangeTickets(e) {
    const numberOfTickets = e.target.value || 0;
    // this.kouk=true;

    
        for (let i = this.t.length; i < numberOfTickets; i++) {

          // this.kouk=true;
            this.t.push(this.fb.group({
              categorie: [],
              accessoires: [],
            }));
        }
     if (this.t.length > numberOfTickets)  {
        for (let i = this.t.length; i >= numberOfTickets; i--) {
            this.t.removeAt(i);
        }
    }
}

@ViewChild('content', {static: false}) content: ElementRef;

display = false;
public download(cat) {
  const doc = new jsPDF('p', 'pt', 'a4');

  const specialElementHandlers = {
    '#editor': function (element, renderer) {
      return true;
    }
  };

  if(cat.checked){
 let kk= this.lista.push(cat.ArticleEntity.name,cat.Prix);
    console.log("nooom:"+cat.ArticleEntity.name);
  // const content = this.content.kk.toString();

  const content =  `<table>
  <thead>
   <tr>
      $Cuisine
   </tr>
   </thead>
   <tbody>
      ${this.setBody2()}
   </tbody>
 </table>`
  doc.html(content, {
    callback: function (doc) {
      doc.save('test.pdf');
    }
  });}


}







onChangeTickets2() {

      for (let i = 0; i <1; i++) {
        // Boolean(Number(0)) ==true,
        // this.kouk=true;
          this.t.push(this.fb.group({
            surface:[],
            categorie: [],
            accessoires: [],
          })
          
          
          );
        
         }
        //  this.kouk=false;
        
}



  get result() {
    return this.allaccessoires.filter(cat => cat.checked);
  }

  get result1() {
    return this.allaccessoires1.filter(cat => cat.checked);
  }
  get result2() {
    return this.allaccessoires2.filter(cat => cat.checked);
  }
  get result3() {
    return this.allaccessoires3.filter(cat => cat.checked);
  }


  


  retrieveGammes() {
    this.gammeservice.allGammes().subscribe(
      (data: any) => {
        this.all = data;
        console.log(data);
      });
    return (this.all)
  }


 loc : number;

  GetCategoryDropdown($event) {
   this.all.forEach((gamme) => {
      if (gamme.id == $event.value) {
        console.log("hhhyudguidb",this.count)
        this.types = gamme.Types;
        const piece = new PieceProjet();
        if ($event.value ==  11) {
          piece.idpiecevue = 5;
          console.log("je suis Standing");}
          if ($event.value == 10 ) {
            console.log("je suis hautstanding");
            piece.idpiecevue = 1;}
            if ($event.value == 12 ) {
              console.log("je suis Normal");
              piece.idpiecevue = 9;}
             console.log("tastiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiit",piece.idpiecevue);
             this.loc = piece.idpiecevue;
        
;
        piece.idprojet =  parseInt(this.id);
      
      piece.nbr =this.count;
      console.log("yyyyyyy",piece.nbr)
      console.log("yyyyyyy2222",this.count)
        
        this.accprojetservice.addPieceParProjet(piece).subscribe((result)=>{
          console.log(result);
       
          
          console.log("id du projet",piece.idprojet);
          console.log("id du piece vue",piece.idpiecevue);
        });
        console.log("id du piece paliiiiiz",piece.id);
     
      
       this.types = gamme.Types;
        console.log("gggg", gamme);

        if(gamme.Types[0].pieces[0].Prestation[0].nom=="Menuiserie"){
         this.allaccessoires= gamme.Types[0].pieces[0].Prestation[0].accessoires;
         console.log("ééééééééééééééééééééééé :",this.allaccessoires);
        //  console.log("kaaaaaaaaaaa :",this.result);
         }
         console.log("kaaaaaaaaaaa25 :",this.result);


        if(gamme.Types[0].pieces[0].Prestation[1].nom=="Electricité"){
      

          this.allaccessoires1= gamme.Types[0].pieces[0].Prestation[1].accessoires;
          console.log("hnee²3333 :",this.allaccessoires);
          }


             
        if(gamme.Types[0].pieces[0].Prestation[2].nom=="peinture"){
      

          this.allaccessoires2= gamme.Types[0].pieces[0].Prestation[2].accessoires;
          console.log("Peinturehs :",this.allaccessoires2);
          }

          if(gamme.Types[0].pieces[0].Prestation[3].nom=="Equipement"){
      

            this.allaccessoires3= gamme.Types[0].pieces[0].Prestation[3].accessoires;
            console.log("Peinturehs :",this.allaccessoires3);
            }




        // this.allaccessoires =gamme.Types[0].pieces[0].Prestation[0].accessoires ;
        console.log("waaaaaaaaa :",this.allaccessoires);
        this.types.forEach((type) => {
          if (type.nom == 'interieur') {
            this.pieces = type.pieces;
            console.log("type:", type.pieces)

            this.pieces.forEach((piece) => {
              if (piece.nom == 'cuisine') {
                // this.Prestation = piece.Prestation;
                this.Prestation =gamme.Types[0].pieces[0].Prestation ;
                console.log("cousinaaaaaaaaaaaaaaaaa" ,piece.Prestation );
              this.Prestation.forEach((pres) => {

               if (pres.piecesid == piece.id && piece.typeid ==type.id.toString() && type.gammeid == $event.value ) {
                this.allaccessoires =gamme.Types[0].pieces[0].Prestation[0].accessoires ;
                    console.log("accessoireeeeeeeeee :", this.allaccessoires)
                   }
                });      }
        });
        console.log("type du gamme 33333:", gamme.Types)
     
      }
    });
    console.log("klima sghira :", $event.value);

  
  }
}); }
piecet: PieceProjet = new PieceProjet();


methfind(idprojet:number,idpiecevue:number){
  this.accprojetservice.findmyproject(idprojet,idpiecevue).subscribe((result)=>{
    console.log(result);
  });
  
}
count=1;




fctmoins(){
  this.count=this.count-1
}

fctplus(){
  this.count=this.count+1
}

piece:PieceProjet
//selectionner la  piece 
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


CreatePieceProjet($event){
  const piece = new PieceProjet();
  if ($event.value = 11 ) {
    piece.idpiecevue = 5
    console.log("je suis Standing");}
    if ($event.value = 10 ) {
      console.log("je suis hautstanding");
      piece.idpiecevue = 1}
  piece.idprojet =  parseInt(this.id);


  this.accprojetservice.addPieceParProjet(piece).subscribe((result)=>{
    console.log(result);
  });

}




addProjet() {
  const projet = new PieceProjet();
  projet.idprojet = parseInt(this.id);
projet.idpiecevue = 13;

this.accprojetservice.addPieceParProjet(projet).subscribe(
 
(success) =>{
  console.log(success)},
(erreur) => console.log(erreur)
);

}

addAccessoirestobase() {
    const accprojet = new AccessoiresProjet();
    accprojet.idpiece = 1;
 accprojet.idaccessoiresvue = 115;

 this.accprojetservice.addAccessoiresParProjet(accprojet).subscribe(
   
  (success) =>{
    console.log(success)},
  (erreur) => console.log(erreur)
 );

}
 Calculate(cat){
  if(cat.checked){
     this.total+= parseInt(cat.Prix)*this.count; 
     this.lista.push(cat.ArticleEntity.name,cat.Prix,this.count);
     console.log("listtaa11111",this.lista);
     console.log("couuuunttt",this.count);
     console.log("priiiiiiiiiiiiiiiiccc:"+cat.Prix);
     console.log("idcalculate:"+cat.id);
     console.log("kkkkkkkkkkkkkkkkkkk",this.id)
   
  }else{
     this.total-= parseInt(cat.Prix);}
    
  console.log("nom :",cat.ArticleEntity.name);
  console.log("Cout estimatif :",this.total);

};


displayCounter() {
  console.log("Cout estimatifoooooo :",this.total);
 
}



  stepOneSubmit() {
  }



}




