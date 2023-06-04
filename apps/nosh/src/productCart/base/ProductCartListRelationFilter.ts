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
import { ProductCartWhereInput } from "./ProductCartWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductCartListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductCartWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductCartWhereInput)
  @IsOptional()
  @Field(() => ProductCartWhereInput, {
    nullable: true,
  })
  every?: ProductCartWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductCartWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductCartWhereInput)
  @IsOptional()
  @Field(() => ProductCartWhereInput, {
    nullable: true,
  })
  some?: ProductCartWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductCartWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductCartWhereInput)
  @IsOptional()
  @Field(() => ProductCartWhereInput, {
    nullable: true,
  })
  none?: ProductCartWhereInput;
}
export { ProductCartListRelationFilter as ProductCartListRelationFilter };