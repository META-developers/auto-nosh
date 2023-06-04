import { Module } from "@nestjs/common";
import { ProductCartOptionModuleBase } from "./base/productCartOption.module.base";
import { ProductCartOptionService } from "./productCartOption.service";
import { ProductCartOptionController } from "./productCartOption.controller";
import { ProductCartOptionResolver } from "./productCartOption.resolver";

@Module({
  imports: [ProductCartOptionModuleBase],
  controllers: [ProductCartOptionController],
  providers: [ProductCartOptionService, ProductCartOptionResolver],
  exports: [ProductCartOptionService],
})
export class ProductCartOptionModule {}
