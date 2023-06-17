import { Injectable } from '@nestjs/common';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feature } from './entities/feature.entity';

@Injectable()
export class FeatureService {
  constructor(
    @InjectRepository(Feature) private featureRepo: Repository<Feature>,
  ) {}
  create(createFeatureDto: CreateFeatureDto) {
    const newFeature = this.featureRepo.create(createFeatureDto);
    return this.featureRepo.save(newFeature);
  }

  findAll() {
    return this.featureRepo.find();
  }

  findOne(id: number): Promise<Feature> {
    return this.featureRepo.findOneBy({ id });
  }

  async update(
    id: number,
    updateFeatureDto: UpdateFeatureDto,
  ): Promise<Feature> {
    const newFeature = await this.findOne(id);
    return this.featureRepo.save({ ...CreateFeatureDto, ...newFeature });
  }

  async remove(id: number) {
    const removeFeature = await this.findOne(id);
    return this.featureRepo.remove(removeFeature);
  }
}
