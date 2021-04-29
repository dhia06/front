import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-Devis',
  templateUrl: './Devis.component.html',
  styleUrls: ['./Devis.component.scss']
})
export class DevisComponent implements OnInit {
  isLinear = true;

  constructor() {}

  ngOnInit() {

  }
}
