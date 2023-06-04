import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductCartSuboptionServiceBase } from "./base/productCartSuboption.service.base";

@Injectable()
export class ProductCartSuboptionService extends ProductCartSuboptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
