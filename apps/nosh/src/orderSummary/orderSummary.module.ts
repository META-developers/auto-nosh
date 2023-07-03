import { Module } from "@nestjs/common";
import { OrderSummaryModuleBase } from "./base/orderSummary.module.base";
import { OrderSummaryService } from "./orderSummary.service";
import { OrderSummaryController } from "./orderSummary.controller";
import { OrderSummaryResolver } from "./orderSummary.resolver";

@Module({
  imports: [OrderSummaryModuleBase],
  controllers: [OrderSummaryController],
  providers: [OrderSummaryService, OrderSummaryResolver],
  exports: [OrderSummaryService],
})
export class OrderSummaryModule {}
