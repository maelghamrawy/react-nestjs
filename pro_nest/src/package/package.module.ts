import { Module } from '@nestjs/common';
import { PackageService } from './package.service';
import { PackageController } from './package.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Package } from './entities/package.entity';
import { Option } from 'src/options/entities/option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Package, Option])],
  controllers: [PackageController],
  providers: [PackageService],
})
export class PackageModule {}
