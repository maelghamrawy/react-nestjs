import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Footer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;
}
