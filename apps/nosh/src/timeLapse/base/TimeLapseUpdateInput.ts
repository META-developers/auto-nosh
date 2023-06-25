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
import { TimeLapseIntervalWhereUniqueInput } from "../../timeLapseInterval/base/TimeLapseIntervalWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";

@InputType()
class TimeLapseUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TimeLapseIntervalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeLapseIntervalWhereUniqueInput)
  @IsOptional()
  @Field(() => TimeLapseIntervalWhereUniqueInput, {
    nullable: true,
  })
  close?: TimeLapseIntervalWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TimeLapseIntervalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeLapseIntervalWhereUniqueInput)
  @IsOptional()
  @Field(() => TimeLapseIntervalWhereUniqueInput, {
    nullable: true,
  })
  open?: TimeLapseIntervalWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ScheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScheduleWhereUniqueInput)
  @IsOptional()
  @Field(() => ScheduleWhereUniqueInput, {
    nullable: true,
  })
  schedule?: ScheduleWhereUniqueInput | null;
}

export { TimeLapseUpdateInput as TimeLapseUpdateInput };
