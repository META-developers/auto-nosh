import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CloseTimeServiceBase } from "./base/closeTime.service.base";

@Injectable()
export class CloseTimeService extends CloseTimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
