import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, ManyToOne, JoinColumn } from 'typeorm'
import { Ongs } from './Ongs'

@Entity('cases')
export class Cases {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  amount: number

  @Column()
  ongID: number

  @ManyToOne(() => Ongs)
  @JoinColumn({
    name: 'ongID'
  })

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}
