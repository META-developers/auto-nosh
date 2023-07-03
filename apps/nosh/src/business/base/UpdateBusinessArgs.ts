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
import { BusinessWhereUniqueInput } from "./BusinessWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BusinessUpdateInput } from "./BusinessUpdateInput";

@ArgsType()
class UpdateBusinessArgs {
  @ApiProperty({
    required: true,
    type: () => BusinessWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BusinessWhereUniqueInput)
  @Field(() => BusinessWhereUniqueInput, { nullable: false })
  where!: BusinessWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BusinessUpdateInput,
  })
  @ValidateNested()
  @Type(() => BusinessUpdateInput)
  @Field(() => BusinessUpdateInput, { nullable: false })
  data!: BusinessUpdateInput;
}

export { UpdateBusinessArgs as UpdateBusinessArgs };
