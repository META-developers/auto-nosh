/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TimeLapseInterval } from "../../timeLapseInterval/base/TimeLapseInterval";
import { ValidateNested, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Schedule } from "../../schedule/base/Schedule";

@ObjectType()
class TimeLapse {
  @ApiProperty({
    required: true,
    type: () => TimeLapseInterval,
  })
  @ValidateNested()
  @Type(() => TimeLapseInterval)
  close?: TimeLapseInterval | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => TimeLapseInterval,
  })
  @ValidateNested()
  @Type(() => TimeLapseInterval)
  open?: TimeLapseInterval | null;

  @ApiProperty({
    required: false,
    type: () => Schedule,
  })
  @ValidateNested()
  @Type(() => Schedule)
  @IsOptional()
  schedule?: Schedule | null;
}

export { TimeLapse as TimeLapse };
