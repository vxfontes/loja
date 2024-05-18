import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [UsuariosModule, ProdutoModule],
})
export class AppModule {}
