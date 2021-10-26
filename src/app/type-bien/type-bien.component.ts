import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../Models/Projet';

@Component({
  selector: 'app-type-bien',
  templateUrl: './type-bien.component.html',
  styleUrls: ['./type-bien.component.scss']
})
export class TypeBienComponent implements OnInit {
  secondgrp: FormGroup;
 projet =new Projet();
@Input() info:any;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.secondgrp = this.formBuilder.group({  
      typebien: [],
  
      });


  //  this.projet =this.route.snapshot.paramMap.get('info');
   console.log("mes infos :",this.info);
  }
 

  public typebien : string;

  add() {

    const info = new Projet();
    info.typebien =this.secondgrp.get("typebien").value;
    console.log('type-bien: ',info);
}
}
