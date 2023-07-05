import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderEventServiceBase } from "./base/orderEvent.service.base";

@Injectable()
export class OrderEventService extends OrderEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
