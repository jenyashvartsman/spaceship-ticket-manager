import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(): string {
    return 'new user';
  }

  signIn(): string {
    return 'token';
  }
}
