import { Controller, Post } from '@nestjs/common';

import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('register')
  register(): string {
    return this.authService.register();
  }

  @Post('sign-in')
  signIn(): string {
    return this.authService.signIn();
  }
}
