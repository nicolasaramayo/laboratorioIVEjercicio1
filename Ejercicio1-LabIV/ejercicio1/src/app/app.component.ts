import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1';

  numeroUno:number = 0;
  numeroDos:number = 0;
  resultadoSuma:number = 0;
  resultadoPromedio:number = 0;


  add()
  {
    this.resultadoSuma = this.numeroUno + this.numeroDos;
  }

  average()
  {
    this.resultadoPromedio = (this.numeroDos + this.numeroUno) / 2;
  }

  clear()
  {
    this.numeroUno = 0;
    this.numeroDos = 0;
    this.resultadoSuma = 0;
    this.resultadoPromedio = 0;
  }

}
