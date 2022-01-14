import { ValidationError } from './errors'

export type Schema =
  | { [fieldName: string]: Schema | EmitAssertValidation | EmitTreeValidation }
  | (Schema | EmitAssertValidation | EmitTreeValidation)[]
  | EmitAssertValidation
  | EmitTreeValidation

export type Structure = Record<string, any> | any[]

export type ErrorTree = Record<string, ValidationError> | ValidationError | undefined

export type Assertion = (value: any) => void

export type ComparingAssertion = (value: any, comparingValue: any) => void

export type AssertionItem = Assertion | [ComparingAssertion, any, string?]

export type EmitAssertValidation = (value: any, key: string, isThrowError?: boolean) => ValidationError | undefined

export type EmitTreeValidation = (input: Structure, key: string, isThrowError?: boolean) => ErrorTree
