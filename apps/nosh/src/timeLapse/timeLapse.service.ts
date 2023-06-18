import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeLapseServiceBase } from "./base/timeLapse.service.base";

@Injectable()
export class TimeLapseService extends TimeLapseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
