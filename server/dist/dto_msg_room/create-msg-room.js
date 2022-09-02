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
exports.dto_user_room = exports.create_dto_msg = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class create_dto_msg {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true, description: "this input used  to add  room name" }),
    __metadata("design:type", String)
], create_dto_msg.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], create_dto_msg.prototype, "text", void 0);
exports.create_dto_msg = create_dto_msg;
class dto_user_room {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true, description: "this input used  to add  room name" }),
    __metadata("design:type", String)
], dto_user_room.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: "this input used  to add  user name" }),
    __metadata("design:type", String)
], dto_user_room.prototype, "room", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: "this input used  to add  user name" }),
    __metadata("design:type", String)
], dto_user_room.prototype, "message", void 0);
exports.dto_user_room = dto_user_room;
//# sourceMappingURL=create-msg-room.js.map