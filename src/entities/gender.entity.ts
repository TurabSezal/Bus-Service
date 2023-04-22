/* eslint-disable prettier/prettier */
import { Column, Entity } from 'typeorm';
import { GlobalEntity } from './global.entity';

@Entity('gender')
export class Gender extends GlobalEntity {
  @Column()
  id: string;

  @Column()
  title: string;
}
