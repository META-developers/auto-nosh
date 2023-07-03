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
import { EnumBusinessMenuProvider } from "./EnumBusinessMenuProvider";
import { IsEnum } from "class-validator";

@InputType()
class BusinessCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumBusinessMenuProvider,
  })
  @IsEnum(EnumBusinessMenuProvider)
  @Field(() => EnumBusinessMenuProvider)
  menuProvider!:
    | "Nosh"
    | "Chowly"
    | "Toast"
    | "Deliverect"
    | "Square"
    | "Checkmate"
    | "Otter";
}

export { BusinessCreateInput as BusinessCreateInput };
