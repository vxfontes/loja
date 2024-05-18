import { Module } from '@nestjs/common';
import { UsuariosModule } from './app/usuarios/usuarios.module';
import { ProdutoModule } from './app/produto/produto.module';
import { DatabaseModule } from './config/database.config';

@Module({
  imports: [UsuariosModule, ProdutoModule, DatabaseModule],
})
export class AppModule {}
