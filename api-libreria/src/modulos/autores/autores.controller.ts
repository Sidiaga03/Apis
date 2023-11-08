import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutoresDto } from './dto/create-autores.dto';
import { UpdateAutoresDto } from './dto/update-autores.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Post()
  create(@Body() createAutoresDto: CreateAutoresDto) {
    console.log('usuario creado')
    // return this.autoresService.create(createAutoresDto);
  }

  @Get()
  findAll() {
    return this.autoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateAutoresDto) {
    return this.autoresService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoresService.remove(+id);
  }
}