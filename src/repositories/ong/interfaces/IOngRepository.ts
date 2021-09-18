export interface IOngRepository {
  findByEmail: (email: string) => any
}