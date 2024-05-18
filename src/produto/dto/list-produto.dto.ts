class ListaCaracteristicaProdutoDTO {
  nome: string;
  descricao: string;
}

class ListaImagemProdutoDTO {
  url: string;
  descricao: string;
}

export class ListProdutoDTO {
  id: string;
  usuarioId: string;
  nome: string;
  valor: number;
  quantidade: number;
  descricao: string;
  categoria: string;
  caracteristicas: ListaCaracteristicaProdutoDTO[];
  imagens: ListaImagemProdutoDTO[];
}
