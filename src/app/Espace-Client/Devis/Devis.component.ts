import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Stepper from 'bs-stepper';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-Devis',
  templateUrl: './Devis.component.html',
  styleUrls: ['./Devis.component.scss']
})
export class DevisComponent implements OnInit {
  isLinear = true;
  // categorie1:number;
  // categorie2:number;
  // categorie3:number;
  superficie:number;
  categorie:number;
  n:number

  
  formGroup: FormGroup;
  form: FormArray;
  @ViewChild('stepper') stepper;
  stepOptions = [
    { label: 'Buy Groceries', value: '1' },
    { label: 'Cook Dinner', value: '2' },
    { label: 'Go To Sleep', value: '3' },
    { label: 'Go To Work', value: '4' },
    { label: 'Wake Up', value: '5' }
  ]
  newSteps = [];
  constructor(private _formBuilder: FormBuilder) {
    // this.newSteps.push({ title: null, value: null });
  }

  ngOnInit() {
    
  }

  // isSet = (value) => {
  //   return value !== undefined && value !== null;
  // }

  // addItem() {
  //   this.newSteps.push({ title: null, value: null }); 
  //   this.stepper.selectedIndex = this.newSteps.length - 1;
  // }
  // changeStep(event, index) {
  //   this.stepper.selectedIndex = this.newSteps.length;
  //   this.newSteps[index].title = this.stepOptions[event.value - 1].label;
  
  // }
  

  onRemoveAll() {
    this.newSteps = [];
  }

  removeStep(i){
    this.newSteps.splice(i,1);
  }
  click1(){
    this.categorie=2000;
  

    
  }
  click2(){
    
   this.categorie=1500
  }
  click3(){
    
 this.categorie=1000
    
  }
  

  test(){
    var c =this.categorie*this.superficie
    Swal.fire({
      html:''+this.superficie*this.categorie+'DT',
      icon: 'info',
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Parfait!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
      title: 'Votre devis express est: ',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      preConfirm: () => {
        return this.categorie*this.superficie
      }

     


    })
    console.log(this.superficie*this.categorie)
    //return this.categorie*this.superficie
  }

}
