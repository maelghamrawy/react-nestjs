import { Module } from '@nestjs/common';
import { FooterService } from './footer.service';
import { FooterController } from './footer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Footer } from './entities/footer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Footer])],
  controllers: [FooterController],
  providers: [FooterService],
})
export class FooterModule {}
