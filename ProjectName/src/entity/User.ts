import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './Group';
import { Post } from './Post';
import { Profile } from './Profile';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({type: Date, nullable: true, default: null})
    deletedAt: Date | null;

    @CreateDateColumn()
    createdAt: Date;

    @OneToOne(type => Profile, profile => profile.user)
    profile: Profile

    @OneToMany(type => Post, post => post.user)
    posts: Post[];

    @ManyToMany(type=>Group, group => group.users)
    groups: Group[];
}
