import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { accessoiresVueService } from '../Dashboard-Admin/services/accessoiresVue.service';
import { GammeVueService } from '../Dashboard-Admin/services/GammeVue.service';
import { prestationVueService } from '../Dashboard-Admin/services/prestationVue.service';
import { TypesVueService } from '../Dashboard-Admin/services/TypesVue.service';
import { AccessoiresVue } from '../Models-SD/Accessoires-Vue';
import { GammeVue } from '../Models-SD/GammeVue';
import { PieceVue } from '../Models-SD/PieceVue';
import { PrestationVue } from '../Models-SD/PrestationVue';
import { TypesVue } from '../Models-SD/TypesVue';
import {jsPDF} from 'jspdf';
import { PieceProjet } from '../Models-SD/PieceProjet';
import { AccessoiresProjetService } from '../step-one/AccessoiresProjet.service';
import { ActivatedRoute } from '@angular/router';
import { AccessoiresProjet } from '../Models-SD/AccessoiresProjet';
@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  
  typeId: number;
  @Input() categorie;
  nom: any;
  all: GammeVue[];
  types: TypesVue[];
  pieces: PieceVue[];
  @Input() FilsProperty2;
  @Input() Property2;


 @Input() total: number ;
 public stepOneForm: FormGroup;
 public stepTwoForm: FormGroup;
 @Input() name;
 count=1;
 Prestation: PrestationVue[];
 allaccessoires1: AccessoiresVue[];
 allaccessoires2: AccessoiresVue[];
 allaccessoires3: AccessoiresVue[];
 allaccessoires: any[];
 constructor(private fb: FormBuilder, private gammeservice: GammeVueService, private accessoiresservice: accessoiresVueService,
    private typeservice: TypesVueService , private prestationservice : prestationVueService,
    private accprojetservice:AccessoiresProjetService,private route: ActivatedRoute) {

  }
  id:string;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("3333333",this.id)
    console.log("loooooppppppppppppppppppppppppppp :",this.FilsProperty2);
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
    
   }

   createItemt(): FormGroup {
    return this.fb.group({
surface:[],
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


  fctmoins(){
    this.count=this.count-1
  }
  
  fctplus(){
    this.count=this.count+1
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
  






















  Calculate(cat){
    if(cat.checked){
       this.FilsProperty2+= parseInt(cat.Prix)*this.count;  
       this.Property2.push(cat.ArticleEntity.name,cat.Prix,this.count);
       console.log("nooom:"+cat.ArticleEntity.name);
        
    }else{
       this.FilsProperty2-= parseInt(cat.Prix);
    }
    console.log("Cout estimatif step2 :",this.FilsProperty2);
  
  };
  
  @Input() FilsProperty
  @Output() sendRequest2 = new EventEmitter();
  @Output() send2 = new EventEmitter();
  
   sendlista2(){
   this.send2.emit(this.Property2);
   }





  //  const doc = new jsPDF('p', 'pt', 'a4');

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
  //       ${this.setBody2()}
  //    </tbody>
  //  </table>`
  //   doc.html(content, {
  //     callback: function (doc) {
  //       doc.save('test.pdf');
  //     }
  //   });
  





  
  sendEvent2(){
  
    this.sendRequest2.emit(this.FilsProperty2);
  
  }
  lista=[];
  setTitle2 = () => {
    var tds = "";
    Object.keys(Object.assign({}, ...this.Property2)).forEach(label => {
      tds += `<th>${label}</th>`
    });
    return tds;
  }
  setBody2 = () => {
    var trs = "";
    const setTd = (obj) => {
      let td = "";
      Object.values(obj).forEach(v => td += `<td>${v}</td>`);
      return td;
    }
    this.Property2.forEach(object => {
      trs += `<tr>${setTd(object)}</tr>`
    });
    return trs;
  }
  loc : number;

  GetCategoryDropdown($event) {
    this.all.forEach((gamme) => {
       if (gamme.id == $event.value) {
      
 

        const piece = new PieceProjet();
        if ($event.value ==  11) {
          piece.idpiecevue = 6;
          console.log("je suis Standing");}
          if ($event.value == 10 ) {
            console.log("je suis hautstanding");
            piece.idpiecevue = 2;}
            if ($event.value == 12 ) {
              console.log("je suis Normal");
              piece.idpiecevue = 10;}
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

         if(gamme.Types[0].pieces[1].Prestation[0].nom=="Menuiserie"){
          this.allaccessoires= gamme.Types[0].pieces[1].Prestation[0].accessoires;
          console.log("hnee² :",this.allaccessoires);
          console.log("kaaaaaaaaaaa :",this.result);
          }
          console.log("kaaaaaaaaaaa25 :",this.result);
 
 
         if(gamme.Types[0].pieces[1].Prestation[1].nom=="Electricité"){
       
 
           this.allaccessoires1= gamme.Types[0].pieces[1].Prestation[1].accessoires;
           console.log("hnee²3333 :",this.allaccessoires1);
           }
 
 
              
         if(gamme.Types[0].pieces[1].Prestation[2].nom=="peinture"){
       
 
           this.allaccessoires2= gamme.Types[0].pieces[1].Prestation[2].accessoires;
           console.log("Peinturehs :",this.allaccessoires2);
           }
 
           if(gamme.Types[0].pieces[1].Prestation[3].nom=="Equipement"){
       
 
             this.allaccessoires3= gamme.Types[0].pieces[1].Prestation[3].accessoires;
             console.log("Peinturehs :",this.allaccessoires3);
             }
 
 
         console.log("waaaaaaaaa :",this.allaccessoires);
         this.types.forEach((type) => {
           if (type.nom == 'interieur') {
             this.pieces = type.pieces;
             console.log("type:", type.pieces)
 
             this.pieces.forEach((piece) => {
               if (piece.nom == 'Salle d eau') {
                 // this.Prestation = piece.Prestation;
                 this.Prestation =gamme.Types[0].pieces[1].Prestation ;
                 console.log("wc" ,piece.Prestation );
               this.Prestation.forEach((pres) => {
 
                if (pres.piecesid == piece.id && piece.typeid ==type.id.toString() && type.gammeid == $event.value ) {
                 this.allaccessoires =gamme.Types[0].pieces[1].Prestation[0].accessoires ;
                     console.log("accessoireeeeeeeeee :", this.allaccessoires)
                    }
                 });      
               }
        
         });
         console.log("type du gamme 33333:", gamme.Types)
      
       }
     });
     console.log("klima sghira :", $event.value);
 
   
   }
 }); }

  stepOneSubmit() {
  }

}




































































// GetCategoryDropdown3($event) {
//   this.Prestation.forEach((pres) => {
//        if (pres.id == $event.value) {
         
 
//          this.allaccessoires = pres.accessoires;
//          console.log("accessoireeeee:", pres.accessoires)
//        }
//      });
    
  
//      console.log("qqq:", $event.value);
 
 
//    }