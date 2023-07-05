import { Module } from "@nestjs/common";
import { OrderEventModuleBase } from "./base/orderEvent.module.base";
import { OrderEventService } from "./orderEvent.service";
import { OrderEventController } from "./orderEvent.controller";
import { OrderEventResolver } from "./orderEvent.resolver";

@Module({
  imports: [OrderEventModuleBase],
  controllers: [OrderEventController],
  providers: [OrderEventService, OrderEventResolver],
  exports: [OrderEventService],
})
export class OrderEventModule {}
