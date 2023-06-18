import { Module } from "@nestjs/common";
import { OpenTimeModuleBase } from "./base/openTime.module.base";
import { OpenTimeService } from "./openTime.service";
import { OpenTimeController } from "./openTime.controller";
import { OpenTimeResolver } from "./openTime.resolver";

@Module({
  imports: [OpenTimeModuleBase],
  controllers: [OpenTimeController],
  providers: [OpenTimeService, OpenTimeResolver],
  exports: [OpenTimeService],
})
export class OpenTimeModule {}
