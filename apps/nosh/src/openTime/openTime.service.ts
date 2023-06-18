import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OpenTimeServiceBase } from "./base/openTime.service.base";

@Injectable()
export class OpenTimeService extends OpenTimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
