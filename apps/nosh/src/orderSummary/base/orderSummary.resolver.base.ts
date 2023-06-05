/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateOrderSummaryArgs } from "./CreateOrderSummaryArgs";
import { UpdateOrderSummaryArgs } from "./UpdateOrderSummaryArgs";
import { DeleteOrderSummaryArgs } from "./DeleteOrderSummaryArgs";
import { OrderSummaryFindManyArgs } from "./OrderSummaryFindManyArgs";
import { OrderSummaryFindUniqueArgs } from "./OrderSummaryFindUniqueArgs";
import { OrderSummary } from "./OrderSummary";
import { Order } from "../../order/base/Order";
import { OrderSummaryService } from "../orderSummary.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderSummary)
export class OrderSummaryResolverBase {
  constructor(
    protected readonly service: OrderSummaryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OrderSummary",
    action: "read",
    possession: "any",
  })
  async _orderSummariesMeta(
    @graphql.Args() args: OrderSummaryFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [OrderSummary])
  @nestAccessControl.UseRoles({
    resource: "OrderSummary",
    action: "read",
    possession: "any",
  })
  async orderSummaries(
    @graphql.Args() args: OrderSummaryFindManyArgs
  ): Promise<OrderSummary[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => OrderSummary, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OrderSummary",
    action: "read",
    possession: "own",
  })
  async orderSummary(
    @graphql.Args() args: OrderSummaryFindUniqueArgs
  ): Promise<OrderSummary | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OrderSummary)
  @nestAccessControl.UseRoles({
    resource: "OrderSummary",
    action: "create",
    possession: "any",
  })
  async createOrderSummary(
    @graphql.Args() args: CreateOrderSummaryArgs
  ): Promise<OrderSummary> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        order: {
          connect: args.data.order,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OrderSummary)
  @nestAccessControl.UseRoles({
    resource: "OrderSummary",
    action: "update",
    possession: "any",
  })
  async updateOrderSummary(
    @graphql.Args() args: UpdateOrderSummaryArgs
  ): Promise<OrderSummary | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          order: {
            connect: args.data.order,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => OrderSummary)
  @nestAccessControl.UseRoles({
    resource: "OrderSummary",
    action: "delete",
    possession: "any",
  })
  async deleteOrderSummary(
    @graphql.Args() args: DeleteOrderSummaryArgs
  ): Promise<OrderSummary | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Order, {
    nullable: true,
    name: "order",
  })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async resolveFieldOrder(
    @graphql.Parent() parent: OrderSummary
  ): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
