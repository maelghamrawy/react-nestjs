import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageModule } from './package/package.module';
import { OptionsModule } from './options/options.module';
import { FooterModule } from './footer/footer.module';
import { SettingModule } from './setting/setting.module';
import { FeatureModule } from './feature/feature.module';
import { dataSourceOptions } from 'db/data-source';
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    PackageModule,
    OptionsModule,
    FooterModule,
    SettingModule,
    FeatureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
