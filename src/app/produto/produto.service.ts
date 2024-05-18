import { Injectable } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListProdutoDTO } from './dto/list-produto.dto';
import { UpdateProdutoDto } from "./dto/update-produto.dto";

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async findAll() {
    const produtosSalvos = await this.produtoRepository.find({
      relations: {
        imagens: true,
        caracteristicas: true,
      },
    });

    return produtosSalvos.map(
      (produto) =>
        new ListProdutoDTO(
          produto.id,
          produto.nome,
          produto.caracteristicas,
          produto.imagens,
        ),
    );
  }

  async create(dadosProduto: Produto) {
    await this.produtoRepository.save(dadosProduto);
  }

  async update(id: string, dadosProduto: UpdateProdutoDto){
    const entityName = await this.produtoRepository.findOneBy({ id });
    Object.assign(entityName, dadosProduto);
    await this.produtoRepository.save(entityName);
  }

  async remove(id: string) {
    await this.produtoRepository.delete(id);
  }
}
