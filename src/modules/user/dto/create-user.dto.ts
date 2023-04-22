/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  mail: string;

  @MinLength(6)
  @IsString()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @MinLength(10)
  phone: string;

  @IsUUID()
  @IsNotEmpty()
  gender_id: string;

  @IsString()
  @MinLength(2)
  name: string;
}
