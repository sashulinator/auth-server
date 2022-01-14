import { ValidationError } from './errors'
import { Schema } from './types'

type Compare = (
  schema: Schema,
  obj: Record<string, any>,
) => {
  errorTree?: Record<string, ValidationError> | ValidationError
  unusedObjectKeys: string[]
  unusedSchemaKeys: string[]
}

export const compare: Compare = (schema, obj) => {
  const schemaEntries = Object.entries(schema)
  let errorTree: Record<string, any> | undefined
  let unusedObjectKeys = Object.keys(obj || {})
  let unusedSchemaKeys = []

  for (let index = 0; index < schemaEntries.length; index++) {
    const [objKey, emitValidator] = schemaEntries[index]
    const objValue = obj?.[objKey]

    unusedObjectKeys = unusedObjectKeys.filter((key) => key !== objKey)

    if (objValue === undefined) {
      unusedSchemaKeys.push(objKey)
    }

    if (typeof emitValidator === 'function') {
      const error = emitValidator(objValue, objKey, false)

      if (error) {
        errorTree[objKey]
      }
    }
  }

  return {
    unusedObjectKeys,
    unusedSchemaKeys,
    errorTree,
  }
}
