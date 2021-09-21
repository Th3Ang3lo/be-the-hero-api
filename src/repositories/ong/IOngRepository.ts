import { Ongs } from '../../models/Ongs'

export interface IOngData {
  id?: number
  ong: string
  email: string
  password?: string
  phone?: string
  city: string
  state: string
  created_at?: Date
  updated_at?: Date
}

export interface IOngRepository {
  findByEmail: (email: string) => Promise<Ongs>
  create: (ongData: IOngData) => Promise<Ongs>
}
