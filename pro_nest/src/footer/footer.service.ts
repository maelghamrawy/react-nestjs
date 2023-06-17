import { Injectable } from '@nestjs/common';
import { CreateFooterDto } from './dto/create-footer.dto';
import { UpdateFooterDto } from './dto/update-footer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Footer } from './entities/footer.entity';

@Injectable()
export class FooterService {
  constructor(
    @InjectRepository(Footer) private footerRepo: Repository<Footer>,
  ) {}
  create(createFooterDto: CreateFooterDto) {
    const newFooter = this.footerRepo.create(createFooterDto);
    return this.footerRepo.save(newFooter);
  }

  findAll() {
    return this.footerRepo.find();
  }

  findOne(id: number): Promise<Footer> {
    return this.footerRepo.findOneBy({ id });
  }

  async update(id: number, updateFooterDto: UpdateFooterDto): Promise<Footer> {
    const updateFeature = this.findOne(id);
    return await this.footerRepo.save({ ...updateFeature, ...updateFooterDto });
  }

  async remove(id: number) {
    const romveFooter = await this.findOne(id);
    return this.footerRepo.remove(romveFooter);
  }
}
