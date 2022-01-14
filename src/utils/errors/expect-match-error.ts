export default async function expectMatchError(cb: () => void | Error, obj: Error | object): Promise<void> {
  let error: Error | void

  try {
    error = await cb()

    if (!error) {
      throw new Error('Function `expectMatchError` should return or throw an error!')
    }
  } catch (e) {
    if (e instanceof Error) {
      error = e
    }
  } finally {
    return expect(JSON.parse(JSON.stringify(error))).toMatchObject(JSON.parse(JSON.stringify(obj)))
  }
}
