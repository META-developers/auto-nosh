/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductCartWhereInput } from "./ProductCartWhereInput";
import { Type } from "class-transformer";
import { ProductCartOrderByInput } from "./ProductCartOrderByInput";

@ArgsType()
class ProductCartFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductCartWhereInput,
  })
  @Field(() => ProductCartWhereInput, { nullable: true })
  @Type(() => ProductCartWhereInput)
  where?: ProductCartWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductCartOrderByInput],
  })
  @Field(() => [ProductCartOrderByInput], { nullable: true })
  @Type(() => ProductCartOrderByInput)
  orderBy?: Array<ProductCartOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductCartFindManyArgs as ProductCartFindManyArgs };