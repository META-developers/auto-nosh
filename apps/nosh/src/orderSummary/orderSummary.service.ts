import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderSummaryServiceBase } from "./base/orderSummary.service.base";

@Injectable()
export class OrderSummaryService extends OrderSummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
