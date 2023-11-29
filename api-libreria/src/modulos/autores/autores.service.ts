import { Injectable, InternalServerErrorException, Patch } from '@nestjs/common';
import { CreateAutoreDto } from './dto/create-autores.dto';
import { UpdateAutoreDto } from './dto/update-autores.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autore } from './entities/autores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autore)
    private readonly autorRepository: Repository<Autore>
  ){}

async create(createAutoreDto: CreateAutoreDto) {
  try {
    const autor = this.autorRepository.create(createAutoreDto);
    await this.autorRepository.save(autor)
    return {
      msg: 'Registro insertado',
      data: autor,
      status: 200 
      
    }
  }catch(error){
    throw new InternalServerErrorException('Ponte en contacto con el admin')
  }}

  findAll() {
    return `This action returns all autores`;
  }

  findOne(nif: number) {
    return `This action returns a #${nif} autore`;
  }

  @Patch()
  update(nif: number, updateAutoreDto: UpdateAutoreDto) {
    return `This action updates a #${nif} autore`;
  }

  remove(nif: number) {
    return `This action removes a #${nif} autore`;
  }

  async deleteAllAutores(){
    const query = this.autorRepository.createQueryBuilder('autor');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch(error){
      throw new InternalServerErrorException('Pongase en contacto en el administrador')
    }
  }
}