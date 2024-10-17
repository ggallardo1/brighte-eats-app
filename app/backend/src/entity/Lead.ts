// app/backend/src/entity/Lead.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Lead {
    @PrimaryGeneratedColumn()
    id!: number; // Use the definite assignment operator

    @Column()
    name!: string; // Use the definite assignment operator

    @Column()
    email!: string; // Use the definite assignment operator

    @Column()
    mobile!: string; // Use the definite assignment operator

    @Column()
    postcode!: string; // Use the definite assignment operator

    @Column("simple-array")
    services!: string[]; // Use the definite assignment operator
}