import { ApiProperty } from '@nestjs/swagger';
import { IsEthereumAddress, IsNotEmpty } from 'class-validator';

export class CreateTutorDTO {
  @ApiProperty()
  @IsEthereumAddress()
  @IsNotEmpty()
  walletAddress: string;
}
