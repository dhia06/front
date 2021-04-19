import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from '../least/signup.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {


  orderForm: FormGroup;
  items: FormArray;

  // On injecte une instance de FormBuilder en dépendance de notre component
  constructor(private formBuilder: FormBuilder,private signup : SignupService) {}

  ngOnInit() {
 
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.createItem() ]),
     // gamme: ''
    });

    console.log(this.orderForm);
  }


  get formData() { return <FormArray>this.orderForm.get('items'); }

  // Permet de créer un reactiveForm à la volée
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
 
    });
  }
  submit2ToServer(){
    console.log(this.orderForm.get('items').value);
    // this.orderForm.get('items').value.forEach(element => {
    //   this.signup.addGamme(element).subscribe(
     
    //     (success) =>{
    //       console.log(success)},
          
    //     (erreur) => console.log(erreur)
    //   );
    
    // });
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

