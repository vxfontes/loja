import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { EmailValidator } from './dto/email.validator';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, EmailValidator],
})
export class UsuariosModule {}
