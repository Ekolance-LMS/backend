import { IsEthereumAddress } from 'class-validator';

export class LoginDTO {
  @IsEthereumAddress()
  publicAddress: string;
}
