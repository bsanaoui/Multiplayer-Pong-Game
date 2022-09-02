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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async signup() {
        let userCount = await this.prisma.user.count({
            where: {
                token_42_api: 'token42tfghfghgfhgfhfghghFFDFD'
            }
        });
        if (userCount === 0) {
            const newuser = await this.prisma.user.create({
                data: {
                    token_42_api: 'token42tfghfghgfhgfhfghghFFDFD',
                    username: 'Soukaina',
                    avatar: 'ava',
                    email: 'ssghuri@student.1337.ma',
                    phone: 2445144,
                    losses: 0,
                    wins: 0,
                    ladder_level: 0,
                },
            });
            console.log(newuser);
            console.log('I have signed up');
        }
        else {
            console.log('already exists');
        }
        let userCount1 = await this.prisma.user.count({
            where: {
                token_42_api: 'token4244444444444'
            }
        });
        if (userCount1 === 0) {
            const newuser1 = await this.prisma.user.create({
                data: {
                    token_42_api: 'token4244444444444',
                    username: 'Hamza',
                    avatar: 'ava',
                    email: 'hchorfi@student.1337.ma',
                    phone: 25544,
                    losses: 0,
                    wins: 0,
                    ladder_level: 0,
                },
            });
            console.log(newuser1);
            console.log('I have signed up');
        }
        let userCount2 = await this.prisma.user.count({
            where: {
                token_42_api: 'token333'
            }
        });
        if (userCount2 === 0) {
            const newuser2 = await this.prisma.user.create({
                data: {
                    token_42_api: 'token333',
                    username: 'Safa',
                    avatar: 'ava',
                    email: 'sbarka@student.1337.ma',
                    phone: 255442,
                    losses: 0,
                    wins: 0,
                    ladder_level: 0,
                },
            });
            console.log(newuser2);
            console.log('I have signed up');
        }
        else {
            console.log('already exists');
        }
        let userCount5 = await this.prisma.user.count({
            where: {
                token_42_api: 'token42tf'
            }
        });
        if (userCount5 === 0) {
            const newuser = await this.prisma.user.create({
                data: {
                    token_42_api: 'token42tf',
                    username: 'Brahim',
                    avatar: 'ava',
                    email: 'brahim@student.1337.ma',
                    phone: 2445144,
                    losses: 0,
                    wins: 0,
                    ladder_level: 0,
                },
            });
            console.log(newuser);
            console.log('I have signed up');
        }
        else {
            console.log('already exists');
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map