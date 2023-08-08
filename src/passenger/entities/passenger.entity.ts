import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import type { UserGender } from './../types/passenger.type';

@Entity()
export class Passenger extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'passenger_id' })
  passengerId: string;

  @Column({
    type: 'bigint',
    unique: true,
    nullable: false,
    name: 'nro_passport',
  })
  nroPassport: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  surname: string;

  @Column({ type: 'date', nullable: false, name: 'birth_date' })
  birthDate: Date;

  @Column({
    type: 'enum',
    enum: ['male', 'female'],
    nullable: false,
  })
  gender: UserGender;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  celphone: string;

  @Column({ type: 'boolean', nullable: false, default: true })
  isActivate: boolean;

  @Column({ type: 'varchar', length: 150, nullable: false })
  createdBy: string;

  @Column({
    type: 'timestamp',
    nullable: false,
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
