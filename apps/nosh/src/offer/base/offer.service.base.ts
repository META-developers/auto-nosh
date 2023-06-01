/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Offer, Order } from "@prisma/client";

export class OfferServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OfferFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferFindManyArgs>
  ): Promise<number> {
    return this.prisma.offer.count(args);
  }

  async findMany<T extends Prisma.OfferFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferFindManyArgs>
  ): Promise<Offer[]> {
    return this.prisma.offer.findMany(args);
  }
  async findOne<T extends Prisma.OfferFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferFindUniqueArgs>
  ): Promise<Offer | null> {
    return this.prisma.offer.findUnique(args);
  }
  async create<T extends Prisma.OfferCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferCreateArgs>
  ): Promise<Offer> {
    return this.prisma.offer.create<T>(args);
  }
  async update<T extends Prisma.OfferUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferUpdateArgs>
  ): Promise<Offer> {
    return this.prisma.offer.update<T>(args);
  }
  async delete<T extends Prisma.OfferDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferDeleteArgs>
  ): Promise<Offer> {
    return this.prisma.offer.delete(args);
  }

  async findOrder(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.offer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .order(args);
  }
}