import { Cases } from '../../models/Cases'

export interface ICaseData {
  id?: number
  title: string
  description?: string
  amount: number
  created_at?: Date
  updated_at?: Date
}

export interface ICasesRepository {
  create: (caseData: ICaseData, ongID: number) => Promise<Cases>
}
