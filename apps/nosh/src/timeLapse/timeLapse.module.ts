import { Module } from "@nestjs/common";
import { TimeLapseModuleBase } from "./base/timeLapse.module.base";
import { TimeLapseService } from "./timeLapse.service";
import { TimeLapseController } from "./timeLapse.controller";
import { TimeLapseResolver } from "./timeLapse.resolver";

@Module({
  imports: [TimeLapseModuleBase],
  controllers: [TimeLapseController],
  providers: [TimeLapseService, TimeLapseResolver],
  exports: [TimeLapseService],
})
export class TimeLapseModule {}
