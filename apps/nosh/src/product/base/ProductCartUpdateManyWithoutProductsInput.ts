/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductCartWhereUniqueInput } from "../../productCart/base/ProductCartWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductCartUpdateManyWithoutProductsInput {
  @Field(() => [ProductCartWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductCartWhereUniqueInput],
  })
  connect?: Array<ProductCartWhereUniqueInput>;

  @Field(() => [ProductCartWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductCartWhereUniqueInput],
  })
  disconnect?: Array<ProductCartWhereUniqueInput>;

  @Field(() => [ProductCartWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductCartWhereUniqueInput],
  })
  set?: Array<ProductCartWhereUniqueInput>;
}

export { ProductCartUpdateManyWithoutProductsInput as ProductCartUpdateManyWithoutProductsInput };