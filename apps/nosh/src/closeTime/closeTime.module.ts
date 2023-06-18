import { Module } from "@nestjs/common";
import { CloseTimeModuleBase } from "./base/closeTime.module.base";
import { CloseTimeService } from "./closeTime.service";
import { CloseTimeController } from "./closeTime.controller";
import { CloseTimeResolver } from "./closeTime.resolver";

@Module({
  imports: [CloseTimeModuleBase],
  controllers: [CloseTimeController],
  providers: [CloseTimeService, CloseTimeResolver],
  exports: [CloseTimeService],
})
export class CloseTimeModule {}
