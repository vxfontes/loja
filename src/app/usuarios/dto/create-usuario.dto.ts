import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsEmailUnico } from './email.validator';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  @IsEmailUnico({ message: 'Já existe um usuário com este e-mail' })
  email: string;

  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  senha: string;
}
