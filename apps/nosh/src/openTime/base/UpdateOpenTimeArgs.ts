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
import { OpenTimeWhereUniqueInput } from "./OpenTimeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OpenTimeUpdateInput } from "./OpenTimeUpdateInput";

@ArgsType()
class UpdateOpenTimeArgs {
  @ApiProperty({
    required: true,
    type: () => OpenTimeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OpenTimeWhereUniqueInput)
  @Field(() => OpenTimeWhereUniqueInput, { nullable: false })
  where!: OpenTimeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OpenTimeUpdateInput,
  })
  @ValidateNested()
  @Type(() => OpenTimeUpdateInput)
  @Field(() => OpenTimeUpdateInput, { nullable: false })
  data!: OpenTimeUpdateInput;
}

export { UpdateOpenTimeArgs as UpdateOpenTimeArgs };
