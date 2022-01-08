import crypto from 'crypto'

export const ITERATIONS = 100000
export const KEY_LENGTH = 64

/**
 * We use PBKDF2 because of its strong resistance to brute force attacks
 * https://www.ietf.org/rfc/rfc2898.txt
 */
export default function generateHashedPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, 'sha512').toString('hex')
}
