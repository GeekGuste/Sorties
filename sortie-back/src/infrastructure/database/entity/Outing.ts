import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Outing {
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column("date")
    date: Date | undefined
}