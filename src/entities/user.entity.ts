/* eslint-disable prettier/prettier */
import { Column, Entity } from 'typeorm';
import { GlobalEntity } from './global.entity';

@Entity()
export class User extends GlobalEntity {
  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  mail: string;

  @Column()
  phone: string;

  @Column()
  gender_id: string;

  @Column()
  password: string;
}
