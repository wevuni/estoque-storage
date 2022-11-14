import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Guid} from 'guid-typescript';
import { Produto } from 'src/app/models/model';
import { ServiceService } from 'src/app/service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  private produto: Produto
  public produtoForm: FormGroup
  public arrayProduto: any
  public modoEdicao = false
  constructor(
    private route : ActivatedRoute,
    private formBuilder: FormBuilder,
    private produtoService: ServiceService,
    private produtos: ServiceService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.produto = {id:Guid.createEmpty(), nome:"", quantidade:"", valor:""}
    const id : string = String(this.route.snapshot.paramMap.get('id'))
    this.produtos.enviarDadosId(id).then(array => this.produto = array)
    this.produtoForm = this.formBuilder.group ({
      id:[this.produto.id],
      nome:[this.produto.nome, Validators.required],
      quantidade:[this.produto.quantidade],
      valor:[this.produto.valor]
    })
  }
  enviar(){
    if(this.produtoForm.valid) {
      this.produtos.inserir(this.produtoForm.value)
    }}
    IniciarEdicao(){
      this.modoEdicao = true
    }
    EncerrarEdicao(){
      const id : string = String(this.route.snapshot.paramMap.get('id'))
      if (this.produtoForm.valid){
        this.produtos.ComprarProduto(id, this.produtoForm.value)
        this.modoEdicao = false
      }
    }
    ExcluirProduto(){

      const id : string = String(this.route.snapshot.paramMap.get('id'))

      this.produtos.ExcluirProdutoId(id)
      this.router.navigate(['/listagem/']).then(() => {window.location.reload();});
    }

}
