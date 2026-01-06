import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async googleLogin(req): Promise<{ access_token: string; user: any }> {
        if (!req.user) {
            throw new Error('No user from google');
        }

        const user = await this.userService.findOrCreate({
            email: req.user.email,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            picture: req.user.picture,
            googleId: req.user.googleId,
        });

        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
}
