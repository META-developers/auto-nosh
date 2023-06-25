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
import { StringFilter } from "../../util/StringFilter";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";

@InputType()
class TimeLapseWhereInput {
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
  close?: TimeLapseIntervalWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  open?: TimeLapseIntervalWhereUniqueInput;

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
  schedule?: ScheduleWhereUniqueInput;
}

export { TimeLapseWhereInput as TimeLapseWhereInput };
