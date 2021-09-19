import {
  compare,
  hash
} from 'bcrypt'

export const generateHash = async (plaintext: string): Promise<string> => {
  return hash(plaintext, 8)
}

export const compareHash = async (plaintext: string, hash: string): Promise<string> => {
  return compare(plaintext, hash)
}
