import { Module } from "@nestjs/common";
import { SuboptionModuleBase } from "./base/suboption.module.base";
import { SuboptionService } from "./suboption.service";
import { SuboptionController } from "./suboption.controller";
import { SuboptionResolver } from "./suboption.resolver";

@Module({
  imports: [SuboptionModuleBase],
  controllers: [SuboptionController],
  providers: [SuboptionService, SuboptionResolver],
  exports: [SuboptionService],
})
export class SuboptionModule {}
