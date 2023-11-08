import { Module } from "@nestjs/common";
import { AutoresService } from './autores.service'
import { AutoresController } from './autores.controller'
import { TypeOrmModule } from "@nestjs/typeorm";
import { Autores } from "./entities/autores.entity";

@Module({
    controllers: [AutoresController],
    providers: [AutoresService],
    imports: [
        TypeOrmModule.forFeature([Autores])
    ]
})
export class AutoresModule {}
