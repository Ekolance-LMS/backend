import { IsEthereumAddress, IsNotEmpty } from 'class-validator';

export class CreateStudentDTO {
  @IsEthereumAddress()
  @IsNotEmpty()
  walletAddress: string;
}
