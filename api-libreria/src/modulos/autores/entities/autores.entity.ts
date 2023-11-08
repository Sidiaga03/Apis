import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autores{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', {unique: true})
    nombre: string
}