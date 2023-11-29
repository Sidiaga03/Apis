import { Module } from '@nestjs/common';
import { LibrosService } from '../libros/libros.service';
import { LibrosController } from './libros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './entities/libros.entity';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
  imports: [
    TypeOrmModule.forFeature([Libro])
  ],
  exports: [LibrosService, TypeOrmModule]
})
export class LibrosModule {}