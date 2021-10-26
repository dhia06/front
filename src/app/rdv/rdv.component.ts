import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Rdv } from 'src/app/Models/Rdv';
import Swal from 'sweetalert2';
import { Client } from '../Models/client';
import { RdvService } from './rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.scss']
})
export class RdvComponent implements OnInit {
  
  dataSource: any = [];
  travaux: Rdv = new Rdv();
  displayedColumns: string[] = ['id', 'titre', 'date', 'nomcl', 'tel', 'email', 'actions'];

  ;


  sendmailmeet(element) {
    const profesionalInfo = new Client();
    profesionalInfo.email = element.email;
    console.log("ffffffffffffffffffffffff", element.email)
    this.rdvserv.rdvmeet(profesionalInfo).subscribe(

      (success) => {


        console.log(success)
      },
      (erreur) => {


        console.log(erreur)
      }
    );



  }

  constructor(private rdvserv: RdvService, private router: Router) { }

  ngOnInit(): void {
    this.Retreiveredv()
  }

  Retreiveredv() {

    this.rdvserv.readServices().subscribe((result) => {

      this.dataSource = result;
      console.log(JSON.stringify(this.dataSource))

    })
  }



  deleterdv(id_rdv) {
    this.rdvserv.deleteserv(id_rdv).subscribe((result) => {
      console.log("wwwwi", result);
      console.log("id",Rdv)
      this.ngOnInit()
    });
    Swal.fire('Parfait!', 'Vous venez de decliner ce RDV!un mail explicatif va etre envoyé au client!', 'success')
  }
}
