"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResponse = void 0;
const common_1 = require("@nestjs/common");
class GenericResponse extends common_1.HttpException {
    constructor(data, message = 'Forbidden', statuscode = common_1.HttpStatus.FORBIDDEN) {
        super(null, statuscode);
        this.message = message;
        this.data = data;
    }
    static success(data, message = 'success', status = common_1.HttpStatus.OK) {
        return new GenericResponse(data, message, status);
    }
    static created(data, message = 'created', status = common_1.HttpStatus.CREATED) {
        return new GenericResponse(data, message, status);
    }
    static noContent(data, message = 'no content', status = common_1.HttpStatus.NO_CONTENT) {
        return new GenericResponse(data, message, status);
    }
    static badRequest(data, message = 'bad request', status = common_1.HttpStatus.BAD_REQUEST) {
        return new GenericResponse(data, message, status);
    }
    static notFound(data, message = 'not found', status = common_1.HttpStatus.NOT_FOUND) {
        return new GenericResponse(data, message, status);
    }
    static notAcceptable(data, message = 'not acceptable', status = common_1.HttpStatus.NOT_ACCEPTABLE) {
        return new GenericResponse(data, message, status);
    }
    static internalServerError(data, message = 'internal server error', status = common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
        return new GenericResponse(data, message, status);
    }
    static already(data, message = 'User already exists', status = common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
        return new GenericResponse(data, message, status);
    }
}
exports.GenericResponse = GenericResponse;
//# sourceMappingURL=GenericResponse.js.map