import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit{
  public resultadoSorteio: String | any = sessionStorage.getItem("sorteado")
  constructor() {}
  ngOnInit(): void {
    
  }
}
