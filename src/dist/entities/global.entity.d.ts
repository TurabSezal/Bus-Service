import { BaseEntity } from 'typeorm';
export declare class GlobalEntity extends BaseEntity {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    setCreatedAt(): void;
    setUpdatedAt(): void;
    setDeletedAt(): void;
}
