import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Role } from "./role.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: any;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({unique: true})
    email!: string;

    @Column()
    password!: string;

    @ManyToOne(() => Role)
    @JoinColumn({name: 'role_id'})
    role!: Role;
}