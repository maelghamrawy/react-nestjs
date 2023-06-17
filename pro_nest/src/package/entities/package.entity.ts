import { Option } from 'src/options/entities/option.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  description: string;

  @ManyToMany((type) => Option, (option) => option.packages)
  @JoinTable()
  options: Option[];
}
