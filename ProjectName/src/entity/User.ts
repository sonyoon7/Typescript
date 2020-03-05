import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: "varchar", length: 120 })
  name: string;

  @Column({ type: "tinyint" })
  age: number;

  @Column({ type: Date, nullable: true, default: null })
  deletedAt: Date | null;

  @Column({ default: true })
  enable: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
