import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ()
export class Permission extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: any;

    @Column()
    name!: string;
}