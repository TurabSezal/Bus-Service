import { IApiResponse } from './api-response.interface';
import { HttpException } from '@nestjs/common';
export declare class ApiResponse<T> extends HttpException implements IApiResponse<T> {
    data: T;
    message: string;
    constructor(data: T, message: string, status: number);
}
export declare class SuccessResponse<T> extends ApiResponse<T> {
    constructor(data: T, message?: string);
}
export declare class CreatedResponse<T> extends ApiResponse<T> {
    constructor(data: T, message?: string);
}
export declare class NoContentResponse extends ApiResponse<null> {
    constructor();
}
export declare class ErrorResponse<T> extends ApiResponse<T> {
    constructor(data: T, message?: string);
}
export declare class UnauthorizedResponse extends ApiResponse<null> {
    constructor(message?: string);
}
export declare class ForbiddenResponse extends ApiResponse<null> {
    constructor(message?: string);
}
export declare class NotFoundResponse extends ApiResponse<null> {
    constructor(message?: string);
}
export declare class NotAcceptableResponse extends ApiResponse<null> {
    constructor(message?: string);
}
export declare class InternalServerErrorResponse extends ApiResponse<null> {
    constructor(message?: string);
}
export declare class ServiceUnavailableResponse extends ApiResponse<null> {
    constructor(message?: string);
}
export declare class GatewayTimeoutResponse extends ApiResponse<null> {
    constructor(message?: string);
}
