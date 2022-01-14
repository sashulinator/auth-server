import { EmitAssertValidation, EmitTreeValidation, ErrorTree, Schema, Structure, StructureSchema } from './types'

export type ProcessResult = {
  errorTree: ErrorTree
  unusedObjectKeys: string[]
  unusedSchemaKeys: string[]
}

type Process<S extends Structure> = (schema: StructureSchema, structure: S) => ProcessResult

export function processOrEmit(schema: Schema, structure: any, key: string): ProcessResult {
  if (typeof schema === 'function') {
    return {
      errorTree: schema(structure, key, false),
      unusedObjectKeys: [],
      unusedSchemaKeys: [],
    }
  } else if (structure === undefined) {
    return {
      errorTree: undefined,
      unusedObjectKeys: [],
      unusedSchemaKeys: [],
    }
  } else {
    return process(schema, structure)
  }
}

function removeErrorTreeIfEmpty(errorTree: ErrorTree): ErrorTree {
  return Object.values(errorTree).find(Boolean) ? errorTree : undefined
}

const processArray: Process<any[]> = (schema, arrayStructure) => {
  let localErrorTree: Record<string, any> = {}

  if (schema.length > 1) {
    throw Error(
      'Schema Error: Array in a schema cannot have length more than 1. Maybe you want to export functions "or" or "and"',
    )
  }

  for (let index = 0; index < arrayStructure.length; index++) {
    const key = index.toString()
    const { errorTree } = processOrEmit(schema[0], index.toString(), arrayStructure?.[index])
    localErrorTree[key] = errorTree
  }

  return {
    errorTree: removeErrorTreeIfEmpty(localErrorTree),
    unusedObjectKeys: [],
    unusedSchemaKeys: [],
  }
}

const processObject: Process<Record<string, any>> = (schema, objectStructure) => {
  let localErrorTree: Record<string, any> | undefined = {}
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

    const { errorTree } = processOrEmit(schemaValue, objValue, objKey)
    localErrorTree[objKey] = errorTree
  }

  return {
    unusedObjectKeys,
    unusedSchemaKeys,
    errorTree: removeErrorTreeIfEmpty(localErrorTree),
  }
}

export const process: Process<Record<string, any> | any[]> = (schema, structure) => {
  if (Array.isArray(structure)) {
    return processArray(schema, structure)
  } else {
    return processObject(schema, structure)
  }
}
