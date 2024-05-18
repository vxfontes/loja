import { Injectable } from '@nestjs/common';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  private produtos: Produto[] = [];

  findAll() {
    return this.produtos;
  }

  create(dadosProduto: Produto) {
    this.produtos.push(dadosProduto);
    return dadosProduto;
  }

  private findOne(id: string) {
    const possivelProduto = this.produtos.find((produto) => produto.id === id);

    if (!possivelProduto) {
      throw new Error('Produto não existe');
    }

    return possivelProduto;
  }

  async update(id: string, dadosProduto: Partial<Produto>) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const produto = this.findOne(id);
    Object.entries(dadosProduto).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      produto[chave] = valor;
    });

    return produto;
  }

  async remove(id: string) {
    const produtoRemovido = this.findOne(id);
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
    return produtoRemovido;
  }
}
