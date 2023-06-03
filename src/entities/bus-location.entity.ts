/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany } from 'typeorm';
import { GlobalEntity } from './global.entity';
import { BusExpedition } from './bus-expedition.entity';

@Entity('bus_location')
export class BusLocation extends GlobalEntity {
  @Column()
  id: string;

  @Column()
  title: string;

  @OneToMany(
    () => BusExpedition,
    (busExpedition) => busExpedition.departureLocation,
    {
      eager: false,
    },
  )
  public departureLocations: BusExpedition[];
}
