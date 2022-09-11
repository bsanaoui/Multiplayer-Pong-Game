import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateUserDto {
 
    @ApiProperty({description : " login "})
    @IsNotEmpty()
    @IsString()
    login : string

    @ApiProperty({description : " name "})
    @IsNotEmpty()
    @IsString()
    username : string

    @ApiProperty({description : "email"})
    @IsEmail()
    @IsOptional()
    email :string


    @ApiProperty({description : "losses"})
    @IsNotEmpty()
    @IsNumber()
    losses : number
    
    @ApiProperty({description : "wins"})
    @IsNumber()
    wins : number


    @ApiProperty({description : "ladder level"})
    @IsNumber()
    ladder_level : number



    
    
    
    
    
}
