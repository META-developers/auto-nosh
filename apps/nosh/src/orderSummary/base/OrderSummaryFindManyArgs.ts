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
import { OrderSummaryWhereInput } from "./OrderSummaryWhereInput";
import { Type } from "class-transformer";
import { OrderSummaryOrderByInput } from "./OrderSummaryOrderByInput";

@ArgsType()
class OrderSummaryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrderSummaryWhereInput,
  })
  @Field(() => OrderSummaryWhereInput, { nullable: true })
  @Type(() => OrderSummaryWhereInput)
  where?: OrderSummaryWhereInput;

  @ApiProperty({
    required: false,
    type: [OrderSummaryOrderByInput],
  })
  @Field(() => [OrderSummaryOrderByInput], { nullable: true })
  @Type(() => OrderSummaryOrderByInput)
  orderBy?: Array<OrderSummaryOrderByInput>;

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

export { OrderSummaryFindManyArgs as OrderSummaryFindManyArgs };