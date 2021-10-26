import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Principal } from '../Models/principal.model';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dhia(){
    Swal.fire({
                title: 'Merci Pour votre confiance!votre message sera repondu le plutot possible!',
                text: 'You can check your email to carry on your registration process as a professional.',
                imageUrl: 'https://cdn.prdaily.com/wp-content/uploads/2020/04/comms-champion-COVID-19-crisis.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
}}