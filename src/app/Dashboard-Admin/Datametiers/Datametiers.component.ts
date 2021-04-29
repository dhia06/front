import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Gamme } from '../../Models/gamme';
import { Servicemodel } from '../../Models/Servicemodel';
import { AddServiceService } from '../ServicesAddArticle/addservice.service';
import { AddTravailService } from '../ServicesAddArticle/addtravail.service';
import { AddTravaildetService } from '../ServicesAddArticle/addtravaildet.service';
import { ArticleService } from '../ServicesAddArticle/article.service';

@Component({
  selector: 'app-Datametiers',
  templateUrl: './Datametiers.component.html',
  styleUrls: ['./Datametiers.component.scss']
})
export class DatametiersComponent implements OnInit {
  services:Servicemodel[];
  data:any;
  xx:any[]=[];
  @Input() serviceid;
  @Input() travailid;
  @Input() travdetid;
  travaux: any;
  selectedGamme:string
  @Input() categorie;
  all:Gamme[];
  tous:any;
orderForm: FormGroup;
TaskForm:FormGroup;
TaskFormGroup:FormGroup;
ArticleForm:FormGroup;
@Input() items: FormArray;
@Input() itemst: FormArray;
@Input() itemstd: FormArray;
@Input() itemsa: FormArray;
public name:string;
public nameservice:string;
public id:number;
lista=[];
lista3=[];
lista4=[];
lista5=[];
 @Output() item:Gamme[]
// **************
 isLinear = false;

 identityFormGroup: FormGroup;
 addressFormGroup: FormGroup;
 thirdFormGroup: FormGroup;
 constructor(private formBuilder: FormBuilder, private myservice : AddServiceService, private travaildet:AddTravaildetService,
  private travail:AddTravailService, private article:ArticleService) {}
  

  ngOnInit() {

    this.retrieveGammes();
    this.orderForm = this.formBuilder.group({
    items: this.formBuilder.array([ this.createItem() ]),  
    categorie: [],

    });
   this.retrieveServices();

    this.TaskForm = this.formBuilder.group({
      itemst: this.formBuilder.array([ this.createItemt() ]),
      serviceid:[],
    })

    this. retrieveTravaux();
    this.TaskFormGroup = this.formBuilder.group({
      itemstd: this.formBuilder.array([ this.createItemtd() ]),
      travailid:[],
    });
    this. retrieveTravauxd();
    this.ArticleForm = this.formBuilder.group({
      itemsa: this.formBuilder.array([ this.createItema() ]),
      travdetid:[],
    });
 
   
  }
  //Get la liste des Gammes
  retrieveGammes(): void {
    this.myservice.allGamme().subscribe(
      (data: any) => {
           this.all = data;
           console.log(data);
          });
    }
      //Get la liste des Services
  retrieveServices() {
    this.travail.allService().subscribe(
      (data: any) => {
           this.services = data;
           console.log(this.services);
          });
          return(this.services)
    }
      //Get la liste des Travaux
    retrieveTravaux(): void {
      this.travaildet.allTravaux().subscribe(
        (data: any) => {
             this.travaux = data;
             console.log(data);
            });
      }
        //Get la liste des Travaux détaillés
      retrieveTravauxd(): void {
        this.article.allTravauxdet().subscribe(
          (data: any) => {
               this.tous = data;
               console.log(data);
              });
        }
  //permet de recuperer le tableau de l'items (qui contient les noms des services:nameservices)   
 get formData() { return <FormArray>this.orderForm.get('items'); }
  //permet de recuperer le tableau de l'itemst=items travail (qui contient les noms des travaux:travailnames)   
 get formDatat() { return <FormArray>this.TaskForm.get('itemst'); }
   //permet de recuperer le tableau de l'itemstd=items travail détaillé(qui contient les noms des travaux détaillé:dtnames)   
 get formDatatd() { return <FormArray>this.TaskFormGroup.get('itemstd'); }
    //permet de recuperer le tableau de l'itemsa=items article(qui contient les noms des articles:articlenames)   
 get formDataa() { return <FormArray>this.ArticleForm.get('itemsa'); }
 

   // Permet de créer un reactiveForm à la volée
   createItem(): FormGroup {
     return this.formBuilder.group({
      nameservice: ['', Validators.required],
  
     });
   }
   createItemt(): FormGroup {
    return this.formBuilder.group({
    travailname:['', Validators.required],
 
    });
  }
   createItemtd(): FormGroup {
    return this.formBuilder.group({

    dtname: ['', Validators.required],
    description:['', Validators.required],
 
    });
  }
  createItema(): FormGroup {
    return this.formBuilder.group({                     
      articlename: ['', Validators.required],
      image:['', Validators.required],
      unite: ['', Validators.required],
      prix:['', Validators.required],
 
    });
  }
  // Cette fonction permet d'ajouter un service/des services à partir de la categorie sélectionnée(Normal-HG-THG) et des noms de services insérés 
   submit2ToServer(){
    this.lista=[];
    this.orderForm.value.items.forEach((element)=> {
      const data={ nameservice:element.nameservice,categorie:this.orderForm.value.categorie};
      this.lista.push(data);
  
    });
    this.myservice.addService(this.lista).subscribe(  
    (success) =>{
      console.log(JSON.stringify("success"+success)
      
      )
      this.ngOnInit();
    },
      (erreur) => console.log(erreur)
      
    
    );
 

  }

   // Cette fonction permet d'ajouter un travail/des travaux à partir du service sélectionnée(qui est juste ajouté) et des noms des travaux  insérés 
  submit3ToServer(){
    this.lista3=[];
    this.TaskForm.value.itemst.forEach((element)=> {
      
      const data={travailname:element.travailname,serviceid:this.TaskForm.value.serviceid};
      this.lista3.push(data);
    });
    this.travail.addTravail(this.lista3).subscribe(
       
      (success) =>{
        console.log(success)
        this.ngOnInit();},
        
        (erreur) => console.log(erreur)
        
    );

  }
  // Cette fonction permet d'ajouter un/des travail/travaux détaillé(s) à partir du travail sélectionné(qui est juste ajouté) et du/des  nom(s) du/des travail/travaux détaillé(s) inséré(s). 
  submit4ToServer(){
    this.lista4=[];
    this.TaskFormGroup.value.itemstd.forEach((element)=> {
      const data={ dtname:element.dtname,description:element.description,travailid:this.TaskFormGroup.value.travailid};

      this.lista4.push(data);
    
    });
    this.travaildet.addTravaildet(this.lista4)
    .subscribe(  
      
    (success) =>{

      console.log(success)
      this.ngOnInit();},
      (erreur) => console.log(erreur)
    );
    this.ngOnInit();}
  
  
  // Cette fonction permet d'ajouter un/des artcle(s) à partir du travail détaillé sélectionné(qui est juste ajouté) et du/des  nom(s) du/des nom(s) de l'article(s) ,duprix et de l'image inséré(s). 
    submit5ToServer(){
      this.lista5=[];
      this.ArticleForm.value.itemsa.forEach((element)=> {
        const data={ articlename:element.articlename,image:element.image,unite:element.unite,prix:element.prix,travdetid:this.ArticleForm.value.travdetid};
        this.lista5.push(data);
      
      });
      this.article.addArticle(this.lista5)
      .subscribe(  
        
      (success) =>{
  
        console.log(success)},
        (erreur) => console.log(erreur)
      );
      Swal.fire('Great', 'You have just add an article !', 'success')
      }
 
      //ajouter une ligne pour inserer le nouveau nom de service:nameservice(items regroupe les nameservices)
   addItem(): void {
     this.items = this.orderForm.get('items') as FormArray;
     this.items.push(this.createItem());
    
   }
   //ajouter une ligne pour inserer le nouveau nom du travail:Taskname(itemst regroupe les Tasknames)
   addItemt(): void {
    this.itemst = this.TaskForm.get('itemst') as FormArray;
    this.itemst.push(this.createItemt());
   
  }
     //ajouter une ligne pour inserer le nouveau nom du travail détaillé: dtname(itemstd regroupe les dtnames)
   addItemtd(): void {
    this.itemstd = this.TaskFormGroup.get('itemstd') as FormArray;
    this.itemstd.push(this.createItemtd());
   
  }
     //ajouter une ligne pour inserer le nouveau nom d'article:articlename(itemsa regroupe les articlenames)
  addItema(): void {
    this.itemsa = this.ArticleForm.get('itemsa') as FormArray;
    this.itemsa.push(this.createItema());
   
  }
  

   deleteItemLine(e, i): void {
     e.preventDefault();
     this.items = this.orderForm.get('items') as FormArray;
     console.log(this.items);
     this.items.removeAt(i);
   }
 
}

