import { Module } from "@nestjs/common";
import { TimeLapseIntervalModuleBase } from "./base/timeLapseInterval.module.base";
import { TimeLapseIntervalService } from "./timeLapseInterval.service";
import { TimeLapseIntervalController } from "./timeLapseInterval.controller";
import { TimeLapseIntervalResolver } from "./timeLapseInterval.resolver";

@Module({
  imports: [TimeLapseIntervalModuleBase],
  controllers: [TimeLapseIntervalController],
  providers: [TimeLapseIntervalService, TimeLapseIntervalResolver],
  exports: [TimeLapseIntervalService],
})
export class TimeLapseIntervalModule {}
