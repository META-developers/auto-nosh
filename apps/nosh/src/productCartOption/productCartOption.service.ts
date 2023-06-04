import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductCartOptionServiceBase } from "./base/productCartOption.service.base";

@Injectable()
export class ProductCartOptionService extends ProductCartOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
