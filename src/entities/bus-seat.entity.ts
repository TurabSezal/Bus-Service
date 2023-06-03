/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { GlobalEntity } from './global.entity';
import { BusExpedition } from './bus-expedition.entity';
import { Gender } from './gender.entity';

@Entity('bus_seat')
export class BusSeat extends GlobalEntity {
  @Column()
  id: string;

  @Column()
  bus_expediton_id: string;

  @Column()
  gender_id: string;

  @Column()
  number: number;

  @Column()
  status: boolean;

  @OneToOne(() => BusExpedition, {
    eager: false,
  })
  @JoinColumn({
    name: 'bus_expediton_id',
    referencedColumnName: 'id',
  })
  public busExpedition: BusExpedition;

  @OneToOne(() => Gender, {
    eager: false,
  })
  @JoinColumn({
    name: 'gender_id',
    referencedColumnName: 'id',
  })
  public gender: Gender;
}
