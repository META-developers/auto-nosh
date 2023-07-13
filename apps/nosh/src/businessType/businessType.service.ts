import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessTypeServiceBase } from "./base/businessType.service.base";

@Injectable()
export class BusinessTypeService extends BusinessTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
