import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeLapseIntervalServiceBase } from "./base/timeLapseInterval.service.base";

@Injectable()
export class TimeLapseIntervalService extends TimeLapseIntervalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
