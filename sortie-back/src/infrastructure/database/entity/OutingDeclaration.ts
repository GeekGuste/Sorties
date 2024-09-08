import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Outing } from "./Outing";

@Entity()
export class OutingDeclaration {
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column("date")
    date: Date | undefined

    @Column()
    name: string | undefined

    @Column()
    situation: string | undefined

    @Column()
    details: string | undefined

    @Column()
    salvationPrayer: boolean | undefined

    @ManyToOne(() => Outing)
    outing: Outing | undefined
}