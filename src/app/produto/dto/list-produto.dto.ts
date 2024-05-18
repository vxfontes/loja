class ListaCaracteristicaProdutoDTO {
  nome: string;
  descricao: string;
}

class ListaImagemProdutoDTO {
  url: string;
  descricao: string;
}

export class ListProdutoDTO {
  constructor(
    readonly id: string,
    readonly nome: string,
    readonly caracteristicas: ListaCaracteristicaProdutoDTO[],
    readonly imagens: ListaImagemProdutoDTO[],
  ) {}
}
