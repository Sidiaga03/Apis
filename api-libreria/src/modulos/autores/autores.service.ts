import { Injectable, InternalServerErrorException, Patch, Post } from '@nestjs/common';
import { CreateAutoresDto } from './dto/create-autores.dto';
import { UpdateAutoresDto } from './dto/update-autores.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autores } from './entities/autores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autores)
    private readonly autorRepository: Repository<Autores>
  ){

  }

  // @Post()
  // async create(createAutoresDto: CreateAutoresDto) {
  //   try{
  //   // const autor = this.autorRepository.create(createAutoresDto);

  //   await this.autorRepository.save(autor);
  //   return{
  //     msg: 'Registro Insertado',
  //     data: autor,
  //     status: 200
  //   }

  //   }catch(error){
      
  //     console.log(error);
  //     throw new InternalServerErrorException('Pongase en contacto con el Sysadmin')
  //   }
  //   return 'This action adds a new autores';
  // }

  findAll() {
    return `This action returns all autores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autores`;
  }
  @Patch()
  update(id: number, updateAutoresDto: UpdateAutoresDto) {
    return `This action updates a #${id} autores`;
  }

  remove(id: number) {
    return `This action removes a #${id} autores`;
  }
}
