import { ApiProperty } from '@nestjs/swagger';

export class CreatePackageDto {
  @ApiProperty()
  price: number;
  @ApiProperty()
  description: string;
}
