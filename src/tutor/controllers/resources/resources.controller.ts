import { Controller } from '@nestjs/common';
import { ResourcesService } from 'src/tutor/services/resources/resources.service';

@Controller('resources')
export class ResourcesController {
  constructor(private resourceService: ResourcesService) {}
}
