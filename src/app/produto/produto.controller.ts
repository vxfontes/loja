import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    const produto = new Produto();

    produto.id = crypto.randomUUID();
    produto.nome = createProdutoDto.nome;
    produto.usuarioId = createProdutoDto.usuarioId;
    produto.valor = createProdutoDto.valor;
    produto.quantidade = createProdutoDto.quantidade;
    produto.descricao = createProdutoDto.descricao;
    produto.categoria = createProdutoDto.categoria;
    produto.caracteristicas = createProdutoDto.caracteristicas;
    produto.imagens = createProdutoDto.imagens;

    return this.produtoService.create(produto);
  }

  @Get()
  async findAll() {
    return this.produtoService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ) {
    const produtoAlterado = await this.produtoService.update(
      id,
      updateProdutoDto,
    );

    return {
      mensagem: 'produto atualizado com sucesso',
      produto: produtoAlterado,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const produtoRemovido = await this.produtoService.remove(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: produtoRemovido,
    };
  }
}
