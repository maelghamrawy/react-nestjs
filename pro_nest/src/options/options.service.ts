import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './entities/option.entity';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option) private optionRepo: Repository<Option>,
  ) {}

  create(createOptionDto: CreateOptionDto) {
    const newOption = this.optionRepo.create(createOptionDto);
    return this.optionRepo.save(newOption);
  }

  findAll() {
    return this.optionRepo.find();
  }

  findOne(id: number) {
    return this.optionRepo.findOneBy({ id });
  }

  async update(id: number, updateOptionDto: UpdateOptionDto) {
    const newOption = this.findOne(id);
    return await this.optionRepo.save({ ...newOption, ...updateOptionDto });
  }

  async remove(id: number) {
    const removeOption = await this.findOne(id);
    return this.optionRepo.remove(removeOption);
  }
}
