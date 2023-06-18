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
import { IntFilter } from "../../util/IntFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { TimeLapseWhereUniqueInput } from "../../timeLapse/base/TimeLapseWhereUniqueInput";

@InputType()
class OpenTimeWhereInput {
  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  hour?: IntFilter;

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
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  minute?: IntFilter;

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
  timeLapse?: TimeLapseWhereUniqueInput;
}

export { OpenTimeWhereInput as OpenTimeWhereInput };
