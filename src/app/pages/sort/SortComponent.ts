import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  public nome: string = '';// carrega no nome do input
  public sorteado: string = '';//variavel que carrega a pessoa sorteada
  public pBoolean: boolean = true;//booleano para usar no texto Este nome já foi inserido. Selecione outro nome quando true ele desaparece
  public disable: boolean = true;//booleano quando true deixa o botao sortear disable
  public contador: number = 0; //contador para ver se o numero de pessoas é igual a 2
  public nomesSorteio: Array<string> = [];
  constructor() { }
  ngOnInit(): void {
  }
  public resetInput() {
    const inputArquivo: any = document.getElementById('nome');
    inputArquivo.value = '';
  }
  public verificaArray(): true | false {
    var nomeVerify = this.nome.toLowerCase().trim()
    var i = 0;
    while (i < this.nomesSorteio.length) {
      if (nomeVerify === this.nomesSorteio[i].toLowerCase()) {
        this.resetInput()
        return true
      }
      i++;
    }
    this.pBoolean = true
    return false
  }
  public remove(i: number) {
    this.contador = this.contador - 1;
    if (this.contador < 2) {
      this.disable = true;
    }
    this.nomesSorteio.splice(i, 1); //remove o elemento de index vindo do html
  }
  public sortear() {
    this.sorteado = this.nomesSorteio[Math.floor(Math.random() * this.nomesSorteio.length)];
    sessionStorage.setItem("sorteado", this.sorteado); //salva o resultado no session storage para usar no outro componente
  }
  public verificaTamanhoArray() {
    if(this.nomesSorteio.length >= 2) {
      this.disable = false
    }else {
      this.disable = true
    }
  }
  public addNome() {
    this.contador = this.contador + 1;
    if(this.contador == 1) {
      this.nomesSorteio.push(this.nome.charAt(0).toUpperCase() + this.nome.slice(1).trim()); //deixa a primeira string maiuscula ignorando espaço
      this.resetInput()
    }
    if(this.contador > 1) {
      if(this.verificaArray() == true) {
        this.pBoolean = false
        this.contador = this.contador - 1
        this.resetInput()
      }else {
        this.nomesSorteio.push(this.nome.charAt(0).toUpperCase() + this.nome.slice(1).trim());//deixa a primeira string maiuscula ignorando espaço
        this.resetInput()
      }
    }
  }
}