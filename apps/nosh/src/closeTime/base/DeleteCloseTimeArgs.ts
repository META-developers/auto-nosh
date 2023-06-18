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
import { CloseTimeWhereUniqueInput } from "./CloseTimeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteCloseTimeArgs {
  @ApiProperty({
    required: true,
    type: () => CloseTimeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CloseTimeWhereUniqueInput)
  @Field(() => CloseTimeWhereUniqueInput, { nullable: false })
  where!: CloseTimeWhereUniqueInput;
}

export { DeleteCloseTimeArgs as DeleteCloseTimeArgs };
