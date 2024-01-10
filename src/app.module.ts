import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { UserModule } from './core/user/user.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [AuthModule, UserModule, SharedModule],
})
export class AppModule {
  //
}
