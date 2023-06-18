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
import { TimeLapseWhereUniqueInput } from "./TimeLapseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteTimeLapseArgs {
  @ApiProperty({
    required: true,
    type: () => TimeLapseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeLapseWhereUniqueInput)
  @Field(() => TimeLapseWhereUniqueInput, { nullable: false })
  where!: TimeLapseWhereUniqueInput;
}

export { DeleteTimeLapseArgs as DeleteTimeLapseArgs };
