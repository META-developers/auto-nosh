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
import { IsInt, ValidateNested } from "class-validator";
import { TimeLapseWhereUniqueInput } from "../../timeLapse/base/TimeLapseWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CloseTimeCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  hour!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  minute!: number;

  @ApiProperty({
    required: true,
    type: () => TimeLapseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeLapseWhereUniqueInput)
  @Field(() => TimeLapseWhereUniqueInput)
  timeLapses!: TimeLapseWhereUniqueInput;
}

export { CloseTimeCreateInput as CloseTimeCreateInput };
