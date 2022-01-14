import { EmitAssertValidation, EmitTreeValidation, ErrorTree, Schema, Structure } from './types'

export type ProcessResult = {
  errorTree: ErrorTree
  unusedObjectKeys: string[]
  unusedSchemaKeys: string[]
}

type Process<S extends Structure> = (schema: Schema, structure: S) => ProcessResult

export function processOrEmit(
  schemaOrEmitter: Schema | EmitAssertValidation | EmitTreeValidation,
  structure: any,
  key: string,
): ErrorTree {
  if (typeof schemaOrEmitter === 'function') {
    return schemaOrEmitter(structure, key, false)
  } else {
    const { errorTree } = process(schemaOrEmitter, structure)
    return errorTree
  }
}

function removeErrorTreeIfEmpty(errorTree: ErrorTree): ErrorTree {
  return Object.values(errorTree).find(Boolean) ? errorTree : undefined
}

const processArray: Process<any[]> = (schema, arrayStructure) => {
  let errorTree: Record<string, any> = {}

  if (schema.length > 1) {
    throw Error(
      'Schema Error: Array in a schema cannot have length more than 1. Maybe you want to export functions "or" or "and"',
    )
  }

  for (let index = 0; index < arrayStructure.length; index++) {
    const key = index.toString()
    errorTree[key] = processOrEmit(schema[0], index.toString(), arrayStructure?.[index])
  }

  return {
    errorTree: removeErrorTreeIfEmpty(errorTree),
    unusedObjectKeys: [],
    unusedSchemaKeys: [],
  }
}

const processObject: Process<Record<string, any>> = (schema, objectStructure) => {
  let errorTree: Record<string, any> | undefined = {}
  const schemaEntries = Object.entries(schema)
  let unusedObjectKeys = Object.keys(objectStructure)
  let unusedSchemaKeys = []

  for (let index = 0; index < schemaEntries.length; index++) {
    const [objKey, schemaValue] = schemaEntries[index]
    const objValue = objectStructure?.[objKey]

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
