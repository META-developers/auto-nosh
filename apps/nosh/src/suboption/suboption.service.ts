import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SuboptionServiceBase } from "./base/suboption.service.base";

@Injectable()
export class SuboptionService extends SuboptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
