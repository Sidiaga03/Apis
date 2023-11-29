import { IsNumber, IsString, MinLength } from "class-validator";
import { Autore } from "../../autores/entities/autores.entity";


export class CreateLibroDto {

    @IsString()
    @MinLength(1)
    isbn: string;

    @IsString()
    @MinLength(5)
    title: string;

    @IsNumber()
    precio: number;

    @IsString()
    @MinLength(1)
    autor_id?: Autore;

}