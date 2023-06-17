import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { Package } from './entities/package.entity';
import { Option } from 'src/options/entities/option.entity';

@Injectable()
export class PackageService {
  constructor(
    @InjectRepository(Package) private packageRepository: Repository<Package>,
    @InjectRepository(Option) private optionRepository: Repository<Option>,
  ) {}

  create(createPackageDto: CreatePackageDto) {
    const newPackage = this.packageRepository.create(createPackageDto);
    return this.packageRepository.save(newPackage);
  }

  async findAll(): Promise<Package[]> {
    return await this.packageRepository.find();
  }

  findOne(id: number): Promise<Package> {
    return this.packageRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePackageDto: UpdatePackageDto,
  ): Promise<Package> {
    // return this.packageRepository.findByIdAndUpdate(id, Package, { new: true });
    const newUpdate = await this.findOne(id);
    return this.packageRepository.save({ ...newUpdate, ...updatePackageDto });
  }

  async delete(id: number) {
    const removePackage = await this.findOne(id);
    return this.packageRepository.delete(removePackage);
  }

  async createPackageWithOptions(
    packageId: number,
    optionIds: number[],
  ): Promise<Package> {
    const options = await this.optionRepository.findBy({ id: In(optionIds) });
    console.log(options);
    const packageEntity = await this.packageRepository.findOne({
      where: { id: packageId },
    });
    console.log(packageEntity.options)
    return this.packageRepository.save({ ...packageEntity, options });
  }
}
