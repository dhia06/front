import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { element } from 'protractor';
import { SignupService } from '../least/signup.service';
import { Gamme } from '../Models/gamme';
import { Servicemodel } from '../Models/Servicemodel';
import { AddServiceService } from './addservice.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss']
})
export class AddserviceComponent implements OnInit {

  all: Gamme[];
  orderForm: FormGroup;
  items: FormArray;
 public name:string;
 public nameservice:string;
 public id:number;
 public categorie: string;
 @Output() item:Gamme[]

  // On injecte une instance de FormBuilder en dépendance de notre component
  constructor(private formBuilder: FormBuilder, private myservice : AddServiceService,private signup:SignupService) {}

  ngOnInit() {
    this.retrieveGammes();
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.createItem() ]),
     categorie:(<HTMLInputElement>document.getElementById("{{this.item.id}}")||{}).value||""
     // categorie:{{this.item.id}}
  
   // categorie: '{{Normal}}',
   //nameservice:''
    });

    console.log(this.orderForm);
  }


  retrieveGammes(): void {
   this.myservice.allGamme().subscribe(
     (data: any) => {
          this.all = data;
          console.log(data);
         });
   }





  get formData() { return <FormArray>this.orderForm.get('items'); }

  // Permet de créer un reactiveForm à la volée
  createItem(): FormGroup {
    return this.formBuilder.group({
   
    //  categorie: '',
      nameservice: ''
 
    });
  }
  // addService
  //<HTMLInputElement>document.getElementById("name")||{}).value||"";
  submit2ToServer(){
    console.log(this.orderForm.get('items').value);
    // const dataInfo = new Servicemodel();
    // dataInfo.categorie = this.categorie,
    // dataInfo.nameservice = this.nameservice,
    this.orderForm.get('items').value.forEach(element=> {
      this.myservice.addService(element)
      // .forEach(ele =>  
        .subscribe(
     
        (success) =>{
          console.log(success)},
          (erreur) => console.log(erreur)
      );
    
    });
  }

  submitToServer(){
    this.orderForm.get('items').value.forEach(element => {
      this.signup.addGamme(element).subscribe(
     
        (success) =>{
          console.log(success)},
          
        (erreur) => console.log(erreur)
      );
    
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    // console.log(this.orderForm.get('items'));
  }


  // Au clic de l'utilisateur sur le bouton "X" pour supprimer une ligne
  deleteItemLine(e, i): void {
    e.preventDefault();
    this.items = this.orderForm.get('items') as FormArray;
    console.log(this.items);
    this.items.removeAt(i);
  }

  // A la soumission du formulaire
  submitForm(formdata) {
    //event.preventDefault();
    console.log(formdata);
    alert("MESSAGE : Ouvrez la console du navigateur pour voir l'objet orderForm")
  }



  /************************************************/
  // Fonction utilitaire pour afficher le prix total
  getTotalPrice() {
    this.items = this.orderForm.get('items') as FormArray;
    let items = this.items.value;
    let total=0;
    for(let item of items) {
      total+=parseFloat(item.price)
    }
    if(!isNaN(total)) {
       return total.toFixed(2); 
    }  
  }


} // FIN DE LA CLASS




