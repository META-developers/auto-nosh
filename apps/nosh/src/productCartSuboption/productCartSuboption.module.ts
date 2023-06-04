import { Module } from "@nestjs/common";
import { ProductCartSuboptionModuleBase } from "./base/productCartSuboption.module.base";
import { ProductCartSuboptionService } from "./productCartSuboption.service";
import { ProductCartSuboptionController } from "./productCartSuboption.controller";
import { ProductCartSuboptionResolver } from "./productCartSuboption.resolver";

@Module({
  imports: [ProductCartSuboptionModuleBase],
  controllers: [ProductCartSuboptionController],
  providers: [ProductCartSuboptionService, ProductCartSuboptionResolver],
  exports: [ProductCartSuboptionService],
})
export class ProductCartSuboptionModule {}
