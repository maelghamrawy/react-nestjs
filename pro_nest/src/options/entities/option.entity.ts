import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Package } from 'src/package/entities/package.entity';

@Entity()
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Package, (packageE) => packageE.options)
  packages: Package[];
}
