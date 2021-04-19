import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../least/signup.service';
import { User } from '../least/user';
import { Article } from '../Models/Article';
import { Datametiers } from '../Models/Datametiers';
import { Servicemodel } from '../Models/Servicemodel';
import { Travaildetailleemodel } from '../Models/Travaildetailleemodel';
import { Travailmodel } from '../Models/Travailmodel ';
import { ArticleService } from '../services/ArticleService';
import { datametiersServiceAdd } from '../services/datametiersServiceAdd';
import { TravaildetService } from '../services/TravaildetService';
import { TravailService } from '../services/TravailService';

@Component({
  selector: 'app-mystepper',
  templateUrl: './mystepper.component.html',
  styleUrls: ['./mystepper.component.scss']
})
export class MystepperComponent implements OnInit {
orderForm: FormGroup;
 items: FormArray;

  constructor(  private signup : SignupService,private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      items: this.formBuilder.array([ this.createItem() ]),

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


  get formData() { return <FormArray>this.orderForm.get('items'); }

  // Permet de créer un reactiveForm à la volée
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
 
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    // console.log(this.orderForm.get('items'));
  }


  submitForm(formdata) {
    
    console.log(formdata);
  //  alert("MESSAGE : Ouvrez la console du navigateur pour voir l'objet orderForm")
  }


 
}