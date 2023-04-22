/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  mail: string;

  @MinLength(6)
  @IsString()
  password: string;
}
