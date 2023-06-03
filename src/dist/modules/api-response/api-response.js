"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayTimeoutResponse = exports.ServiceUnavailableResponse = exports.InternalServerErrorResponse = exports.NotAcceptableResponse = exports.NotFoundResponse = exports.ForbiddenResponse = exports.UnauthorizedResponse = exports.ErrorResponse = exports.NoContentResponse = exports.CreatedResponse = exports.SuccessResponse = exports.ApiResponse = void 0;
const api_response_enum_1 = require("./api-response.enum");
const common_1 = require("@nestjs/common");
class ApiResponse extends common_1.HttpException {
    constructor(data, message, status) {
        super({ data, message }, status);
        this.data = data;
        this.message = message;
    }
}
exports.ApiResponse = ApiResponse;
class SuccessResponse extends ApiResponse {
    constructor(data, message = api_response_enum_1.ApiResponseMessage.SUCCESS) {
        super(data, message, common_1.HttpStatus.OK);
        Object.defineProperty(this, 'name', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: '',
        });
        Object.defineProperty(this, 'response', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: '',
        });
    }
}
exports.SuccessResponse = SuccessResponse;
class CreatedResponse extends ApiResponse {
    constructor(data, message = api_response_enum_1.ApiResponseMessage.CREATED) {
        super(data, message, common_1.HttpStatus.CREATED);
        Object.defineProperty(this, 'name', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: '',
        });
        Object.defineProperty(this, 'response', {
            enumerable: false,
            configurable: true,
            writable: false,
            value: '',
        });
    }
}
exports.CreatedResponse = CreatedResponse;
class NoContentResponse extends ApiResponse {
    constructor() {
        super(null, '', common_1.HttpStatus.NO_CONTENT);
        throw this;
    }
}
exports.NoContentResponse = NoContentResponse;
class ErrorResponse extends ApiResponse {
    constructor(data, message = api_response_enum_1.ApiResponseMessage.BAD_REQUEST) {
        super(data, message, common_1.HttpStatus.BAD_REQUEST);
        throw this;
    }
}
exports.ErrorResponse = ErrorResponse;
class UnauthorizedResponse extends ApiResponse {
    constructor(message = api_response_enum_1.ApiResponseMessage.UNAUTHORIZED) {
        super(null, message, common_1.HttpStatus.UNAUTHORIZED);
        throw this;
    }
}
exports.UnauthorizedResponse = UnauthorizedResponse;
class ForbiddenResponse extends ApiResponse {
    constructor(message = api_response_enum_1.ApiResponseMessage.FORBIDDEN) {
        super(null, message, common_1.HttpStatus.FORBIDDEN);
        throw this;
    }
}
exports.ForbiddenResponse = ForbiddenResponse;
class NotFoundResponse extends ApiResponse {
    constructor(message = api_response_enum_1.ApiResponseMessage.NOT_FOUND) {
        super(null, message, common_1.HttpStatus.NOT_FOUND);
        throw this;
    }
}
exports.NotFoundResponse = NotFoundResponse;
class NotAcceptableResponse extends ApiResponse {
    constructor(message = api_response_enum_1.ApiResponseMessage.NOT_ACCEPTABLE) {
        super(null, message, common_1.HttpStatus.NOT_ACCEPTABLE);
        throw this;
    }
}
exports.NotAcceptableResponse = NotAcceptableResponse;
class InternalServerErrorResponse extends ApiResponse {
    constructor(message = api_response_enum_1.ApiResponseMessage.INTERNAL_SERVER_ERROR) {
        super(null, message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        throw this;
    }
}
exports.InternalServerErrorResponse = InternalServerErrorResponse;
class ServiceUnavailableResponse extends ApiResponse {
    constructor(message = api_response_enum_1.ApiResponseMessage.SERVICE_UNAVAILABLE) {
        super(null, message, common_1.HttpStatus.SERVICE_UNAVAILABLE);
        throw this;
    }
}
exports.ServiceUnavailableResponse = ServiceUnavailableResponse;
class GatewayTimeoutResponse extends ApiResponse {
    constructor(message = api_response_enum_1.ApiResponseMessage.GATEWAY_TIMEOUT) {
        super(null, message, common_1.HttpStatus.GATEWAY_TIMEOUT);
        throw this;
    }
}
exports.GatewayTimeoutResponse = GatewayTimeoutResponse;
//# sourceMappingURL=api-response.js.map