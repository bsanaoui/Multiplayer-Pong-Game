import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    signup(): {
        id: number;
        username: string;
    }[];
    postsignup(): Promise<void>;
}
