import crypto from 'crypto'
import util from 'util'

const randomBytes = util.promisify(crypto.randomBytes)

const SALT_SIZE = 16

export default async (): Promise<string> => {
  const buffer = await randomBytes(SALT_SIZE)
  const str = buffer.toString('hex')

  return str
}
