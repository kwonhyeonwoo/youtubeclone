import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { AccountUser } from './DTO/users.dto';

@Controller('auth')
export class UsersController {
    constructor(
        private userService: UsersService,
    ) { }

    @Post('/signup')
    signup(@Body() body: AccountUser) {
        const { email, nickName, name, password } = body;
        console.log(body)
        return this.userService.singnup(
            email,
            nickName,
            name,
            password
        );
    }

    @Get('/profile')
    profile() {
        return this.userService.profile()
    }
}
