import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormsModule, FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Declaro mi formulario.  
  public myForm: FormGroup;


  //Requiero FormBuilder para construir los formularios.
  constructor(private fb: FormBuilder)
  {

  }


  ngOnInit()
  {
     /**
     * inicializo el formulario con los controles que va a tener.
     * @nombre es un formControl.
     * @dynamicForm: es un grupo de formulario que se va a enviar dinamicamente al subcomponente para establecer una comunicación.
     * routes es un array de formulario que hace parte del grupo dynamicForm.
     */
    
    this.myForm = this.fb.group({
      nombre: new FormControl(''),
      segundoNombre:new FormControl(''),
      dynamicForm:this.fb.group({
        routes:this.fb.array([
          
        ])
      })
    });
  }
}
