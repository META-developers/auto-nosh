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
import { IsInt, IsOptional, ValidateNested } from "class-validator";
import { TimeLapseWhereUniqueInput } from "../../timeLapse/base/TimeLapseWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CloseTimeUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  hour?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minute?: number;

  @ApiProperty({
    required: false,
    type: () => TimeLapseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeLapseWhereUniqueInput)
  @IsOptional()
  @Field(() => TimeLapseWhereUniqueInput, {
    nullable: true,
  })
  timeLapses?: TimeLapseWhereUniqueInput;
}

export { CloseTimeUpdateInput as CloseTimeUpdateInput };
