import { ApiProperty } from '@nestjs/swagger';
import { IsEthereumAddress, IsNotEmpty } from 'class-validator';

export class CreateStudentDTO {
  @ApiProperty()
  @IsEthereumAddress()
  @IsNotEmpty()
  walletAddress: string;
}
