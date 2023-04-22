/* eslint-disable prettier/prettier */
import { Column, Entity } from 'typeorm';
import { GlobalEntity } from './global.entity';

@Entity()
export class Gender extends GlobalEntity {
  @Column()
  id: string;

  @Column()
  title: string;
}
