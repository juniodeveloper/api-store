import { Request } from 'express'

export interface ITypedRequest extends Request {
    userId?: string
 }

export interface TypedRequestBody<T> extends ITypedRequest {
    body: T
 }
