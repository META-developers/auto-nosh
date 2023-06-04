/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Suboption,
  ProductCartSuboption,
  Option,
} from "@prisma/client";

export class SuboptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SuboptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuboptionFindManyArgs>
  ): Promise<number> {
    return this.prisma.suboption.count(args);
  }

  async findMany<T extends Prisma.SuboptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuboptionFindManyArgs>
  ): Promise<Suboption[]> {
    return this.prisma.suboption.findMany(args);
  }
  async findOne<T extends Prisma.SuboptionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuboptionFindUniqueArgs>
  ): Promise<Suboption | null> {
    return this.prisma.suboption.findUnique(args);
  }
  async create<T extends Prisma.SuboptionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuboptionCreateArgs>
  ): Promise<Suboption> {
    return this.prisma.suboption.create<T>(args);
  }
  async update<T extends Prisma.SuboptionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuboptionUpdateArgs>
  ): Promise<Suboption> {
    return this.prisma.suboption.update<T>(args);
  }
  async delete<T extends Prisma.SuboptionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SuboptionDeleteArgs>
  ): Promise<Suboption> {
    return this.prisma.suboption.delete(args);
  }

  async findProductCartSuboptions(
    parentId: string,
    args: Prisma.ProductCartSuboptionFindManyArgs
  ): Promise<ProductCartSuboption[]> {
    return this.prisma.suboption
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productCartSuboptions(args);
  }

  async getOption(parentId: string): Promise<Option | null> {
    return this.prisma.suboption
      .findUnique({
        where: { id: parentId },
      })
      .option();
  }
}