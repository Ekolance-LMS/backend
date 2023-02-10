import { IsEthereumAddress, IsNotEmpty } from 'class-validator';

export class SignUpDTO {
  @IsEthereumAddress()
  @IsNotEmpty()
  walletAddress: string;
}
