import { Module } from "@nestjs/common";
import { BusinessTypeModuleBase } from "./base/businessType.module.base";
import { BusinessTypeService } from "./businessType.service";
import { BusinessTypeController } from "./businessType.controller";
import { BusinessTypeResolver } from "./businessType.resolver";

@Module({
  imports: [BusinessTypeModuleBase],
  controllers: [BusinessTypeController],
  providers: [BusinessTypeService, BusinessTypeResolver],
  exports: [BusinessTypeService],
})
export class BusinessTypeModule {}
