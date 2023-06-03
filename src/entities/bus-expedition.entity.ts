/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { GlobalEntity } from './global.entity';
import { BusLocation } from './bus-location.entity';
import { BusSeat } from './bus-seat.entity';

@Entity('bus_expedition')
export class BusExpedition extends GlobalEntity {
  @Column()
  id: string;

  @Column({ unique: false })
  departure_location_id: string;

  @Column({ unique: false })
  arrival_location_id: string;

  @Column()
  route_start_time: Date;

  @Column()
  route_end_time: Date;

  @Column()
  amount: number;

  @ManyToOne(() => BusLocation, {
    eager: false,
  })
  @JoinColumn({ name: 'departure_location_id', referencedColumnName: 'id' })
  public departureLocation: BusLocation;

  @ManyToOne(() => BusLocation, {
    eager: false,
  })
  @JoinColumn({ name: 'arrival_location_id', referencedColumnName: 'id' })
  public arrivalLocation: BusLocation;

  @OneToMany(() => BusSeat, (busSeat) => busSeat.busExpedition, {
    eager: false,
  })
  public busSeats: BusSeat;
}
