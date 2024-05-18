import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ListUsuarioDTO } from './dto/list-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UpdateUsuarioDTO } from "./dto/update-usuario.dto";

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    const usuarioEntity = new Usuario();
    usuarioEntity.email = createUsuarioDto.email;
    usuarioEntity.senha = createUsuarioDto.senha;
    usuarioEntity.nome = createUsuarioDto.nome;
    usuarioEntity.id = crypto.randomUUID();

    this.usuariosService.create(usuarioEntity);

    return {
      usuario: new ListUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      messagem: 'usuário criado com sucesso',
    };
  }

  @Get()
  async findAll() {
    const usuariosSalvos = await this.usuariosService.findAll();
    return usuariosSalvos.map(
      (usuario) => new ListUsuarioDTO(usuario.id, usuario.nome),
    );
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDTO) {
    const usuarioAtualizado = await this.usuariosService.update(
      id,
      updateUsuarioDto,
    );

    return {
      usuario: usuarioAtualizado,
      messagem: 'usuário atualizado com sucesso',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const usuarioRemovido = await this.usuariosService.remove(id);

    return {
      usuario: usuarioRemovido,
      messagem: 'usuário removido com suceso',
    };
  }
}
