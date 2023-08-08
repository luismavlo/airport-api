import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class ErrorEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'error_id' })
  errorId: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  status: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  message: string;

  @Column({ type: 'text', nullable: true })
  stack: string;

  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
