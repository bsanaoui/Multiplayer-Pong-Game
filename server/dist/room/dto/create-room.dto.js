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
exports.dm_room = exports.room_name = exports.createRoomDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class createRoomDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true, description: "this input used  to add  room name" }),
    __metadata("design:type", String)
], createRoomDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: "this input used  to add  room type if it's private, protected or public" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createRoomDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ required: true, description: "this input used  to add password room of the protected rooms" }),
    __metadata("design:type", String)
], createRoomDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ required: true, description: "this input used  to add the owner of room" }),
    __metadata("design:type", String)
], createRoomDto.prototype, "owner", void 0);
exports.createRoomDto = createRoomDto;
class room_name {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], room_name.prototype, "name", void 0);
exports.room_name = room_name;
class dm_room {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], dm_room.prototype, "from", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], dm_room.prototype, "to", void 0);
exports.dm_room = dm_room;
//# sourceMappingURL=create-room.dto.js.map