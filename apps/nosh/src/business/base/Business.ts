/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CuisineType } from "../../cuisineType/base/CuisineType";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class Business {
  @ApiProperty({
    required: false,
    type: () => [CuisineType],
  })
  @ValidateNested()
  @Type(() => CuisineType)
  @IsOptional()
  cuisineTypes?: Array<CuisineType>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { Business as Business };
