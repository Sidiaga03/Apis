import { IsString, MinLength } from "class-validator"

export class CreateAutoresDto {

    @IsString()
    @MinLength(1)
    id: string;

    @IsString()
    @MinLength(10)
    nombre: string;
}