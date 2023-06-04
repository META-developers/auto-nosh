import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductCartServiceBase } from "./base/productCart.service.base";

@Injectable()
export class ProductCartService extends ProductCartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
