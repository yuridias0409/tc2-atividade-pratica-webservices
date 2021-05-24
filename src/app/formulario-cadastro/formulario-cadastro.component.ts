import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss']
})
export class FormularioCadastroComponent implements OnInit {

  constructor(private web : WebService) { }

  registerProductForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  product = { title: '', price: 0.0, description: '' };

  onSubmit() {
    if (!this.registerProductForm.invalid) {
      this.product.title = this.registerProductForm.value.titulo;
      this.product.price = Number(this.registerProductForm.value.preco);
      this.product.description = this.registerProductForm.value.descricao;
      
      this.web.cadastrarProduto(this.product).subscribe((response) => {
        if (response.ok === true) {
          this.registerProductForm.reset();
          alert('Produto cadastrado com sucesso!');
        } else {
          alert('Cadastro não concluído');
        }
      });
    } else {
      alert('É nececessário preencher todos os campos corretamente');
    }
  }
}
