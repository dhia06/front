import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cout',
  templateUrl: './cout.component.html',
  styleUrls: ['./cout.component.scss']
})
export class CoutComponent implements OnInit {
  @Input() count : number =0;
  
@Input() FilsProperty;
public stepOForm: FormGroup;
  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
    console.log("moiiiiiiiiiiiiiiiiiiiiiiiii :"+this.FilsProperty)
    
    // this.stepOForm = this.fb.group({
    //   total: [],
 

    // });
  }


  displayCounter() {
    console.log("Cout estimatifoooooo 17:",this.count);
   
  }
  







  @Output() valueChange = new EventEmitter();
  counter = 0;

  valueChanged() { // You can give any function name

      // this.counter = this.counter + 1;
      this.valueChange.emit(this.count);
  }
}
