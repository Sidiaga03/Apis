import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoreDto } from './create-autores.dto';

export class UpdateAutoreDto extends PartialType(CreateAutoreDto) {}
