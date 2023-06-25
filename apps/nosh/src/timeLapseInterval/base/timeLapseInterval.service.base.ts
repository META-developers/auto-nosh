/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TimeLapseInterval, TimeLapse } from "@prisma/client";

export class TimeLapseIntervalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TimeLapseIntervalCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeLapseIntervalCountArgs>
  ): Promise<number> {
    return this.prisma.timeLapseInterval.count(args);
  }

  async findMany<T extends Prisma.TimeLapseIntervalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeLapseIntervalFindManyArgs>
  ): Promise<TimeLapseInterval[]> {
    return this.prisma.timeLapseInterval.findMany(args);
  }
  async findOne<T extends Prisma.TimeLapseIntervalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeLapseIntervalFindUniqueArgs>
  ): Promise<TimeLapseInterval | null> {
    return this.prisma.timeLapseInterval.findUnique(args);
  }
  async create<T extends Prisma.TimeLapseIntervalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeLapseIntervalCreateArgs>
  ): Promise<TimeLapseInterval> {
    return this.prisma.timeLapseInterval.create<T>(args);
  }
  async update<T extends Prisma.TimeLapseIntervalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeLapseIntervalUpdateArgs>
  ): Promise<TimeLapseInterval> {
    return this.prisma.timeLapseInterval.update<T>(args);
  }
  async delete<T extends Prisma.TimeLapseIntervalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeLapseIntervalDeleteArgs>
  ): Promise<TimeLapseInterval> {
    return this.prisma.timeLapseInterval.delete(args);
  }

  async getTimeLapseClose(parentId: string): Promise<TimeLapse | null> {
    return this.prisma.timeLapseInterval
      .findUnique({
        where: { id: parentId },
      })
      .timeLapseClose();
  }

  async getTimeLapsesOpen(parentId: string): Promise<TimeLapse | null> {
    return this.prisma.timeLapseInterval
      .findUnique({
        where: { id: parentId },
      })
      .timeLapsesOpen();
  }
}
