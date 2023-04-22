import { HttpException, HttpStatus } from '@nestjs/common';
export declare class GenericResponse<T> extends HttpException {
    data: T;
    constructor(data: T, message?: string, statuscode?: HttpStatus);
    static success<T>(data: T, message?: string, status?: HttpStatus): GenericResponse<T>;
    static created<T>(data: T, message?: string, status?: HttpStatus): GenericResponse<T>;
    static noContent<T>(data: T, message?: string, status?: HttpStatus): GenericResponse<T>;
    static badRequest<T>(data: T, message?: string, status?: HttpStatus): GenericResponse<T>;
    static notFound<T>(data: T, message?: string, status?: HttpStatus): GenericResponse<T>;
    static notAcceptable<T>(data: T, message?: string, status?: HttpStatus): GenericResponse<T>;
    static internalServerError<T>(data: T, message?: string, status?: HttpStatus): GenericResponse<T>;
    static already<T>(data: T, message?: string, status?: HttpStatus): GenericResponse<T>;
}
