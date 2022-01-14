import { ServerError, ValidationError } from './errors'

export type Assertion = (value: any) => void

export type ComparingAssertion = (value: any, comparingValue: any) => void

export type AssertionItem = Assertion | [ComparingAssertion, any, string?]

export type TreeSchema = { [fieldName: string]: TreeSchema | EmitAssertValidation | EmitTreeValidation }

export type EmitAssertValidation = (value: any, key: string, isThrowError?: boolean) => void

export type EmitTreeValidation = (obj: Record<string, any>, key: string, isThrowError?: boolean) => void
