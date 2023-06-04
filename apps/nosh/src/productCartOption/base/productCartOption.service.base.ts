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
  ProductCartOption,
  ProductCartSuboption,
  Option,
  ProductCart,
} from "@prisma/client";

export class ProductCartOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductCartOptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartOptionFindManyArgs>
  ): Promise<number> {
    return this.prisma.productCartOption.count(args);
  }

  async findMany<T extends Prisma.ProductCartOptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartOptionFindManyArgs>
  ): Promise<ProductCartOption[]> {
    return this.prisma.productCartOption.findMany(args);
  }
  async findOne<T extends Prisma.ProductCartOptionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartOptionFindUniqueArgs>
  ): Promise<ProductCartOption | null> {
    return this.prisma.productCartOption.findUnique(args);
  }
  async create<T extends Prisma.ProductCartOptionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartOptionCreateArgs>
  ): Promise<ProductCartOption> {
    return this.prisma.productCartOption.create<T>(args);
  }
  async update<T extends Prisma.ProductCartOptionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartOptionUpdateArgs>
  ): Promise<ProductCartOption> {
    return this.prisma.productCartOption.update<T>(args);
  }
  async delete<T extends Prisma.ProductCartOptionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartOptionDeleteArgs>
  ): Promise<ProductCartOption> {
    return this.prisma.productCartOption.delete(args);
  }

  async findProductCartSuboptions(
    parentId: string,
    args: Prisma.ProductCartSuboptionFindManyArgs
  ): Promise<ProductCartSuboption[]> {
    return this.prisma.productCartOption
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productCartSuboptions(args);
  }

  async getOption(parentId: string): Promise<Option | null> {
    return this.prisma.productCartOption
      .findUnique({
        where: { id: parentId },
      })
      .option();
  }

  async getProductCart(parentId: string): Promise<ProductCart | null> {
    return this.prisma.productCartOption
      .findUnique({
        where: { id: parentId },
      })
      .productCart();
  }
}
