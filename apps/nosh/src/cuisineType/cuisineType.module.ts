import { Module } from "@nestjs/common";
import { CuisineTypeModuleBase } from "./base/cuisineType.module.base";
import { CuisineTypeService } from "./cuisineType.service";
import { CuisineTypeController } from "./cuisineType.controller";
import { CuisineTypeResolver } from "./cuisineType.resolver";

@Module({
  imports: [CuisineTypeModuleBase],
  controllers: [CuisineTypeController],
  providers: [CuisineTypeService, CuisineTypeResolver],
  exports: [CuisineTypeService],
})
export class CuisineTypeModule {}
