import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';
import { Option } from 'src/options/entities/option.entity';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(Setting) private settingRepo: Repository<Setting>,
  ) {}
  create(createSettingDto: CreateSettingDto) {
    const newSetting = this.settingRepo.create(createSettingDto);
    return this.settingRepo.save(newSetting);
  }

  findAll() {
    return this.settingRepo.find();
  }

  findOne(id: number) {
    return this.settingRepo.findOneBy({ id });
  }

  async update(
    id: number,
    updateSettingDto: UpdateSettingDto,
  ): Promise<Setting> {
    const newSetting = await this.findOne(id);
    return this.settingRepo.save({ ...newSetting, ...updateSettingDto });
  }

  async remove(id: number) {
    const newSetting = await this.findOne(id);
    return await this.settingRepo.remove(newSetting);
  }
}
