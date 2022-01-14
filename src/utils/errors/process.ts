import { EmitAssertValidation, EmitTreeValidation, ErrorTree, Schema } from './types'

export type ProcessResult = {
  errorTree: ErrorTree
  unusedObjectKeys: string[]
  unusedSchemaKeys: string[]
}

type Process<Input extends Record<string, any> | any[]> = (schema: Schema, input: Input) => ProcessResult

export function processOrEmit(
  schemaOrEmitter: Schema | EmitAssertValidation | EmitTreeValidation,
  input: any,
  key: string,
): ErrorTree {
  if (typeof schemaOrEmitter === 'function') {
    return schemaOrEmitter(input, key, false)
  } else {
    const { errorTree } = process(schemaOrEmitter, input)
    return errorTree
  }
}

function removeErrorTreeIfEmpty(errorTree: ErrorTree): ErrorTree {
  return Object.values(errorTree).find(Boolean) ? errorTree : undefined
}

const processArray: Process<any[]> = (schema, inputArray) => {
  let errorTree: Record<string, any> = {}

  if (schema.length > 1) {
    // TODO: error
  }

  for (let index = 0; index < inputArray.length; index++) {
    const key = index.toString()
    errorTree[key] = processOrEmit(schema[0], index.toString(), inputArray?.[index])
  }

  return {
    errorTree: removeErrorTreeIfEmpty(errorTree),
    unusedObjectKeys: [],
    unusedSchemaKeys: [],
  }
}

const processObject: Process<Record<string, any>> = (schema, inputObject) => {
  let errorTree: Record<string, any> | undefined = {}
  const schemaEntries = Object.entries(schema)
  let unusedObjectKeys = Object.keys(inputObject)
  let unusedSchemaKeys = []

  for (let index = 0; index < schemaEntries.length; index++) {
    const [objKey, schemaValue] = schemaEntries[index]
    const objValue = inputObject?.[objKey]

    unusedObjectKeys = unusedObjectKeys.filter((key) => key !== objKey)

    if (objValue === undefined) {
      unusedSchemaKeys.push(objKey)
    }

    errorTree[objKey] = processOrEmit(schemaValue, objValue, objKey)
  }

  return {
    unusedObjectKeys,
    unusedSchemaKeys,
    errorTree: removeErrorTreeIfEmpty(errorTree),
  }
}

export const process: Process<Record<string, any> | any[]> = (schema, structure) => {
  if (Array.isArray(structure)) {
    return processArray(schema, structure)
  } else {
    return processObject(schema, structure)
  }
}
