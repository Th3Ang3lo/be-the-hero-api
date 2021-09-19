import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity } from 'typeorm'

@Entity('ongs')
export class Ongs {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  ong: string

  @Column()
  email: string

  @Column()
  password: string

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
