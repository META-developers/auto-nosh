/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductCartSuboptionWhereUniqueInput } from "../../productCartSuboption/base/ProductCartSuboptionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductCartSuboptionUpdateManyWithoutSuboptionsInput {
  @Field(() => [ProductCartSuboptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductCartSuboptionWhereUniqueInput],
  })
  connect?: Array<ProductCartSuboptionWhereUniqueInput>;

  @Field(() => [ProductCartSuboptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductCartSuboptionWhereUniqueInput],
  })
  disconnect?: Array<ProductCartSuboptionWhereUniqueInput>;

  @Field(() => [ProductCartSuboptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductCartSuboptionWhereUniqueInput],
  })
  set?: Array<ProductCartSuboptionWhereUniqueInput>;
}

export { ProductCartSuboptionUpdateManyWithoutSuboptionsInput as ProductCartSuboptionUpdateManyWithoutSuboptionsInput };
