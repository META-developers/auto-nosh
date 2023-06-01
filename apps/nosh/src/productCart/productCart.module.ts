import { Module } from "@nestjs/common";
import { ProductCartModuleBase } from "./base/productCart.module.base";
import { ProductCartService } from "./productCart.service";
import { ProductCartController } from "./productCart.controller";
import { ProductCartResolver } from "./productCart.resolver";

@Module({
  imports: [ProductCartModuleBase],
  controllers: [ProductCartController],
  providers: [ProductCartService, ProductCartResolver],
  exports: [ProductCartService],
})
export class ProductCartModule {}
