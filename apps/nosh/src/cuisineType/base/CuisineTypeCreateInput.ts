/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BusinessCreateNestedManyWithoutCuisineTypesInput } from "./BusinessCreateNestedManyWithoutCuisineTypesInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumCuisineTypeName } from "./EnumCuisineTypeName";

@InputType()
class CuisineTypeCreateInput {
  @ApiProperty({
    required: false,
    type: () => BusinessCreateNestedManyWithoutCuisineTypesInput,
  })
  @ValidateNested()
  @Type(() => BusinessCreateNestedManyWithoutCuisineTypesInput)
  @IsOptional()
  @Field(() => BusinessCreateNestedManyWithoutCuisineTypesInput, {
    nullable: true,
  })
  business?: BusinessCreateNestedManyWithoutCuisineTypesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumCuisineTypeName,
  })
  @IsEnum(EnumCuisineTypeName)
  @Field(() => EnumCuisineTypeName)
  name!:
    | "Mexican"
    | "American"
    | "Italian"
    | "Chinese"
    | "Japanese"
    | "Indian"
    | "Thai"
    | "Coffee"
    | "FastFood"
    | "Brazilian"
    | "Salad"
    | "Sushi"
    | "Pizza"
    | "Burgers"
    | "Greek"
    | "Sandwiches"
    | "Korean"
    | "Desserts";
}

export { CuisineTypeCreateInput as CuisineTypeCreateInput };