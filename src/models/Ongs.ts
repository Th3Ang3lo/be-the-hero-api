import { PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

export class Ongs {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  ong: string

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  city: string

  @Column()
  state: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}
