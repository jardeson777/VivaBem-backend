import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Module({
  providers: [PrismaService],
})
export class SharedModule {
  //
}
