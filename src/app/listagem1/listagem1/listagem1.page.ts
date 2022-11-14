import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Guid} from 'guid-typescript';
import { Produto } from 'src/app/models/model';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-listagem1',
  templateUrl: './listagem1.page.html',
  styleUrls: ['./listagem1.page.scss'],
})
export class Listagem1Page implements OnInit {
  private produto: Produto
  public produtoForm: FormGroup
  public arrayProduto: any
  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ServiceService
  ) { }

  ngOnInit() {
    this.produto = {id:Guid.createEmpty(), nome:"", quantidade:"", valor:""}
    this.produtoForm = this.formBuilder.group ({
      id:[this.produto.id],
      nome:[this.produto.nome, Validators.required],
      quantidade:[this.produto.quantidade],
      valor:[this.produto.valor]
    })
    this.produtoService.listarTodos().then(arrayProduto => {this.arrayProduto = arrayProduto})
  }
  enviar(){
    if(this.produtoForm.valid) {
      this.produtoService.inserir(this.produtoForm.value)
    }}


}
