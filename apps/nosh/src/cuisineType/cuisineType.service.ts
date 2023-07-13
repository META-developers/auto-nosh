import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CuisineTypeServiceBase } from "./base/cuisineType.service.base";

@Injectable()
export class CuisineTypeService extends CuisineTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
