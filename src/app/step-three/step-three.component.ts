import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';

import { accessoiresVueService } from '../Dashboard-Admin/services/accessoiresVue.service';
import { GammeVueService } from '../Dashboard-Admin/services/GammeVue.service';
import { prestationVueService } from '../Dashboard-Admin/services/prestationVue.service';
import { TypesVueService } from '../Dashboard-Admin/services/TypesVue.service';

import { AddServiceService } from '../Dashboard-Admin/ServicesAddArticle/addservice.service';
import { AccessoiresVue } from '../Models-SD/Accessoires-Vue';
import { AccessoiresProjet } from '../Models-SD/AccessoiresProjet';
import { GammeVue } from '../Models-SD/GammeVue';
import { PieceProjet } from '../Models-SD/PieceProjet';
import { PieceVue } from '../Models-SD/PieceVue';
import { PrestationVue } from '../Models-SD/PrestationVue';
import { RemplissageDto } from '../Models-SD/RemplissageDto';
import { TypesVue } from '../Models-SD/TypesVue';
import { AccessoiresProjetService } from '../step-one/AccessoiresProjet.service';
@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  typeId: number;
  @Input() categorie;
  count=1;
  nom: any;
  x:RemplissageDto[];
  all: GammeVue[];
  types: TypesVue[];
  pieces: PieceVue[];
  Prestation: PrestationVue[];
  allaccessoires1: AccessoiresVue[];
  allaccessoires2: AccessoiresVue[];
  allaccessoires3: AccessoiresVue[];
  allaccessoires: any[];
  public stepThreeForm: FormGroup;
  public stepTwoForm: FormGroup;
  loc:number;
  id:string;
  @Input() name;
  constructor(private fb: FormBuilder, private gammeservice: GammeVueService, private accessoiresservice: accessoiresVueService,
    private typeservice: TypesVueService , private prestationservice : prestationVueService, private accprojetservice:AccessoiresProjetService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("3333333",this.id)
 console.log("ssssssss :",this.FilsProperty3);
    this.retrieveGammes();

    this.stepThreeForm = this.fb.group({
      itemst: this.fb.array([ this.createItemt() ]),

    });
  }


  @Output() send3 = new EventEmitter();
  
  sendlista3(){
  this.send3.emit(this.Property3);
  }

  @Input() itemst: FormArray;
  get formDatat() { return <FormArray>this.stepThreeForm.get('itemst'); }



  addItemt(): void {
    this.itemst = this.stepThreeForm.get('itemst') as FormArray;
    this.itemst.push(this.createItemt());
    
   }

   createItemt(): FormGroup {
    return this.fb.group({
surface:[],
    categorie: [],
     accessoires: [],
 
    });
  }

  @Input() total : number=0;
  @Input() FilsProperty3;
  @Input() Property3;
  @Output() sendRequest3 = new EventEmitter();

  fctmoins(){
    this.count=this.count-1
  }
  
  fctplus(){
    this.count=this.count+1
  }
  setBody3 = () => {
    var trs = "";
    const setTd = (obj) => {
      let td = "";
      Object.values(obj).forEach(v => td += `<td>${v}</td>`);
      return td;
    }
    this.Property3.forEach(object => {
      trs += `<tr>${setTd(object)}</tr>`
    });
    return trs;
  }
  

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

  

//   const doc = new jsPDF('p', 'pt', 'a4');

//   const specialElementHandlers = {
//     '#editor': function (element, renderer) {
//       return true;
//     }
//   };

//   const content =  `<table>
//   <thead>
//    <tr>
//       $Salle d eau
//    </tr>
//    </thead>
//    <tbody>
//       ${this.setBody3()}
//    </tbody>
//  </table>`
//   doc.html(content, {
//     callback: function (doc) {
//       doc.save('test.pdf');
//     }
//   });













  sendEvent3(){

    this.sendRequest3.emit(this.FilsProperty3);
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




  GetCategoryDropdown($event) {
   this.all.forEach((gamme) => {
      if (gamme.id == $event.value) {
     


        const piece = new PieceProjet();
        if ($event.value ==  11) {
          piece.idpiecevue = 7;
          console.log("je suis Standing");}
          if ($event.value == 10 ) {
            console.log("je suis hautstanding");
            piece.idpiecevue = 3;}
            if ($event.value == 12 ) {
              console.log("je suis Normal");
              piece.idpiecevue = 11;}
             console.log("tastiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiit",piece.idpiecevue);
             this.loc = piece.idpiecevue;
        
;
        piece.idprojet =  parseInt(this.id);
      
        piece.nbr =this.count;
      
        
        this.accprojetservice.addPieceParProjet(piece).subscribe((result)=>{
          console.log(result);
       
          
          console.log("id du projet",piece.idprojet);
          console.log("id du piece vue",piece.idpiecevue);
        });
        console.log("id du piece paliiiiiz",piece.id);























        this.types = gamme.Types;
        console.log("gggg", gamme);

        if(gamme.Types[0].pieces[2].Prestation[0].nom=="Menuiserie"){
         this.allaccessoires= gamme.Types[0].pieces[2].Prestation[0].accessoires;
         console.log("hnee² :",this.allaccessoires);
         console.log("kaaaaaaaaaaa :",this.result);
         }
         console.log("kaaaaaaaaaaa25 :",this.result);


        if(gamme.Types[0].pieces[2].Prestation[1].nom=="Electricité"){
      

          this.allaccessoires1= gamme.Types[0].pieces[2].Prestation[1].accessoires;
          console.log("hnee²3333 :",this.allaccessoires1);
          }


             
        if(gamme.Types[0].pieces[2].Prestation[2].nom=="peinture"){
      

          this.allaccessoires2= gamme.Types[0].pieces[2].Prestation[2].accessoires;
          console.log("Peinturehs :",this.allaccessoires2);
          }

          if(gamme.Types[0].pieces[2].Prestation[3].nom=="Equipement"){
      

            this.allaccessoires3= gamme.Types[0].pieces[2].Prestation[3].accessoires;
            console.log("Peinturehs :",this.allaccessoires3);
            }




        // this.allaccessoires =gamme.Types[0].pieces[0].Prestation[0].accessoires ;
        console.log("waaaaaaaaa :",this.allaccessoires);
        this.types.forEach((type) => {
          if (type.nom == 'interieur') {
            this.pieces = type.pieces;
            console.log("type:", type.pieces)

            this.pieces.forEach((piece) => {
              if (piece.nom == 'chambre') {
                // this.Prestation = piece.Prestation;
                this.Prestation =gamme.Types[0].pieces[2].Prestation ;
                console.log("chambreee" ,piece.Prestation );
              this.Prestation.forEach((pres) => {

               if (pres.piecesid == piece.id && piece.typeid ==type.id.toString() && type.gammeid == $event.value ) {
                this.allaccessoires =gamme.Types[0].pieces[2].Prestation[0].accessoires ;
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



 
Calculate(cat){
  if(cat.checked){
     this.FilsProperty3+= parseInt(cat.Prix)*this.count;
     this.Property3.push(cat.ArticleEntity.name,cat.Prix,this.count);
      
  }else{
     this.FilsProperty3-= parseInt(cat.Prix);
  }
  console.log("Cout estimatif step2 :",this.FilsProperty3);

};


displayCounter() {
  console.log("Cout estimatifoooooo :",this.total);
 
}



  stepOneSubmit() {
  }













}









