import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutoreDto } from './dto/create-autores.dto';
import { UpdateAutoreDto } from './dto/update-autores.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Post()
  create(@Body() createAutoreDto: CreateAutoreDto) {
    //Si se cumple el DTO se ejecutará lo siguiente
    console.log('usuario creado perfectamente')
    return this.autoresService.create(createAutoreDto);
  }

  @Get()
  findAll() {
    return this.autoresService.findAll();
  }

  @Get(':nif')
  findOne(@Param('nif') nif: string) {
    return this.autoresService.findOne(+nif);
  }

  @Patch(':nif')
  update(@Param('nif') nif: string, @Body() updateAutoreDto: UpdateAutoreDto) {
    return this.autoresService.update(+nif, updateAutoreDto);
  }

  @Delete(':nif')
  remove(@Param('nif') nif: string) {
    return this.autoresService.remove(+nif);
  }
}