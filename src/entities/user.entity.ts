/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { GlobalEntity } from './global.entity';
import { Gender } from './gender.entity';

@Entity('users')
export class User extends GlobalEntity {
  @Column()
  id: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  gender_id: string;

  @Column()
  phone: string;

  @Column()
  age: number;

  @OneToOne(() => Gender, {
    eager: false,
  })
  @JoinColumn({
    name: 'gender_id',
    referencedColumnName: 'id',
  })
  public gender: Gender;
}
