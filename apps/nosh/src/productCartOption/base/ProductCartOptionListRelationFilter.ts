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
import { ProductCartOptionWhereInput } from "./ProductCartOptionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductCartOptionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductCartOptionWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductCartOptionWhereInput)
  @IsOptional()
  @Field(() => ProductCartOptionWhereInput, {
    nullable: true,
  })
  every?: ProductCartOptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductCartOptionWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductCartOptionWhereInput)
  @IsOptional()
  @Field(() => ProductCartOptionWhereInput, {
    nullable: true,
  })
  some?: ProductCartOptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductCartOptionWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductCartOptionWhereInput)
  @IsOptional()
  @Field(() => ProductCartOptionWhereInput, {
    nullable: true,
  })
  none?: ProductCartOptionWhereInput;
}
export { ProductCartOptionListRelationFilter as ProductCartOptionListRelationFilter };