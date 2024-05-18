import { Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListUsuarioDTO } from './dto/list-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuario: Usuario) {
    await this.usuarioRepository.save(createUsuario);
  }

  async findAll() {
    const usuariosSalvos = await this.usuarioRepository.find();
    return usuariosSalvos.map(
      (usuario) => new ListUsuarioDTO(usuario.id, usuario.nome),
    );
  }

  async update(id: string, updateUsuarioDto: Partial<Usuario>) {
    await this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: string) {
    await this.usuarioRepository.delete(id);
  }

  async existeComEmail(email: string) {
    return await this.usuarioRepository.findOne({
      where: { email },
    });
  }
}
