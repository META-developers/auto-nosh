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
  ProductCart,
  ProductCartSuboption,
  Product,
} from "@prisma/client";

export class ProductCartServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductCartFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartFindManyArgs>
  ): Promise<number> {
    return this.prisma.productCart.count(args);
  }

  async findMany<T extends Prisma.ProductCartFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartFindManyArgs>
  ): Promise<ProductCart[]> {
    return this.prisma.productCart.findMany(args);
  }
  async findOne<T extends Prisma.ProductCartFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartFindUniqueArgs>
  ): Promise<ProductCart | null> {
    return this.prisma.productCart.findUnique(args);
  }
  async create<T extends Prisma.ProductCartCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartCreateArgs>
  ): Promise<ProductCart> {
    return this.prisma.productCart.create<T>(args);
  }
  async update<T extends Prisma.ProductCartUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartUpdateArgs>
  ): Promise<ProductCart> {
    return this.prisma.productCart.update<T>(args);
  }
  async delete<T extends Prisma.ProductCartDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCartDeleteArgs>
  ): Promise<ProductCart> {
    return this.prisma.productCart.delete(args);
  }

  async findProductCartSuboptions(
    parentId: string,
    args: Prisma.ProductCartSuboptionFindManyArgs
  ): Promise<ProductCartSuboption[]> {
    return this.prisma.productCart
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productCartSuboptions(args);
  }

  async getProducts(parentId: string): Promise<Product | null> {
    return this.prisma.productCart
      .findUnique({
        where: { id: parentId },
      })
      .products();
  }
}
