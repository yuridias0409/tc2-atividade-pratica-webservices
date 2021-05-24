import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss']
})
export class ListaDeProdutosComponent implements OnInit {

  constructor(private web : WebService) { }

  produtos: Produto[];
  deleteConfirmation: boolean;
  editConfirmation: boolean;
  selectedProduct: Produto;

  getProdutos(): void {
    this.web.getProdutos().subscribe((response) => {
      this.produtos = response;
    });
  }

  editarProduto(produto: Produto) {
    
  }

  removerProduto(produto: Produto) {
    if(confirm("Deseja remover o produto?")){
      this.web.deleteProdutos(produto._id);
      alert('Produto removido com sucesso!')
    } else{
      alert('Produto não removido');
    }
  }

  ngOnInit(): void {
    this.getProdutos();
  }

}
