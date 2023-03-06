// import { WalletAuthenticator } from '@thirdweb-dev/sdk';
import { IsEmail, IsEthereumAddress, IsNotEmpty } from 'class-validator';
import { CreateTutorDTO } from 'src/admin/dtos/CreateTutorDTO';

export class SignUpDTO extends CreateTutorDTO{
  @IsEthereumAddress()
  @IsNotEmpty()
  walletAddress: string;

  @IsEmail()
  email: string;


}
