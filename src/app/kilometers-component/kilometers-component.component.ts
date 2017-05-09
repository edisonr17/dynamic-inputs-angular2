import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm, FormBuilder, Validators, FormGroupName, FormArray } from '@angular/forms';


@Component({
  selector: 'app-kilometers-component',
  templateUrl: './kilometers-component.component.html',
  styleUrls: ['./kilometers-component.component.css']
})
export class KilometersComponentComponent implements OnInit {
  //kilometersFormGroup se declara como Input para que sea requerido desde el componente padre.
  @Input() kilometersFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.kilometersFormGroup);
  }


  /**
  * Agregamos una nueva ruta 
  * desde @kilometersFormGroup tenemos el formGroup declarado en el componente padre y podremos acceder al formArray routes
  */
  addRoute()
  {
    const control = <FormArray>this.kilometersFormGroup.controls['routes'];
    control.push(this.initRoute());
  }

  //Inicializamos los formControl que tendrá cada nuevo item del array routes
  initRoute(){
    return this.fb.group({
      km:0,
      description:''
    });
  }

}
