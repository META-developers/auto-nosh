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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsDate,
  IsInt,
} from "class-validator";
import { BusinessWhereUniqueInput } from "../../business/base/BusinessWhereUniqueInput";
import { Type } from "class-transformer";
import { CartWhereUniqueInput } from "../../cart/base/CartWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ProductCartUpdateManyWithoutOrdersInput } from "./ProductCartUpdateManyWithoutOrdersInput";
import { ReviewUpdateManyWithoutOrdersInput } from "./ReviewUpdateManyWithoutOrdersInput";

@InputType()
class OrderUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  appId?: string | null;

  @ApiProperty({
    required: false,
    type: () => BusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BusinessWhereUniqueInput)
  @IsOptional()
  @Field(() => BusinessWhereUniqueInput, {
    nullable: true,
  })
  business?: BusinessWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CartWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CartWhereUniqueInput)
  @IsOptional()
  @Field(() => CartWhereUniqueInput, {
    nullable: true,
  })
  cart?: CartWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment?: string | null;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deliveryDatetime?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  deliveryType?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deliveryZoneId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  paymethodId?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductCartUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => ProductCartUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => ProductCartUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  products?: ProductCartUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  review?: ReviewUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  status?: number;
}

export { OrderUpdateInput as OrderUpdateInput };
