"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class GlobalEntity extends typeorm_1.BaseEntity {
    setCreatedAt() {
        this.created_at = new Date();
    }
    setUpdatedAt() {
        this.updated_at = new Date();
    }
    setDeletedAt() {
        this.deleted_at = new Date();
    }
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GlobalEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp with time zone',
        default: () => 'NOW()',
    }),
    __metadata("design:type", Date)
], GlobalEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp with time zone',
        default: () => 'NOW()',
        onUpdate: 'NOW()',
    }),
    __metadata("design:type", Date)
], GlobalEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp with time zone',
    }),
    __metadata("design:type", Date)
], GlobalEntity.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GlobalEntity.prototype, "setCreatedAt", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GlobalEntity.prototype, "setUpdatedAt", null);
__decorate([
    (0, typeorm_1.BeforeRemove)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GlobalEntity.prototype, "setDeletedAt", null);
exports.GlobalEntity = GlobalEntity;
//# sourceMappingURL=global.entity.js.map