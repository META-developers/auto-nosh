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
import { CreateOrderArgs } from "./CreateOrderArgs";
import { UpdateOrderArgs } from "./UpdateOrderArgs";
import { DeleteOrderArgs } from "./DeleteOrderArgs";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderFindUniqueArgs } from "./OrderFindUniqueArgs";
import { Order } from "./Order";
import { OfferFindManyArgs } from "../../offer/base/OfferFindManyArgs";
import { Offer } from "../../offer/base/Offer";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { Business } from "../../business/base/Business";
import { Cart } from "../../cart/base/Cart";
import { Address } from "../../address/base/Address";
import { OrderService } from "../order.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Order)
export class OrderResolverBase {
  constructor(
    protected readonly service: OrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async _ordersMeta(
    @graphql.Args() args: OrderFindManyArgs
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
  @graphql.Query(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orders(@graphql.Args() args: OrderFindManyArgs): Promise<Order[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  async order(
    @graphql.Args() args: OrderFindUniqueArgs
  ): Promise<Order | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "any",
  })
  async createOrder(@graphql.Args() args: CreateOrderArgs): Promise<Order> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        business: args.data.business
          ? {
              connect: args.data.business,
            }
          : undefined,

        cart: {
          connect: args.data.cart,
        },

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @graphql.Args() args: UpdateOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          business: args.data.business
            ? {
                connect: args.data.business,
              }
            : undefined,

          cart: {
            connect: args.data.cart,
          },

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,
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

  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "delete",
    possession: "any",
  })
  async deleteOrder(
    @graphql.Args() args: DeleteOrderArgs
  ): Promise<Order | null> {
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
  @graphql.ResolveField(() => [Offer], { name: "offers" })
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "read",
    possession: "any",
  })
  async resolveFieldOffers(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: OfferFindManyArgs
  ): Promise<Offer[]> {
    const results = await this.service.findOffers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Review], { name: "review" })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async resolveFieldReview(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReview(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Business, {
    nullable: true,
    name: "business",
  })
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "read",
    possession: "any",
  })
  async resolveFieldBusiness(
    @graphql.Parent() parent: Order
  ): Promise<Business | null> {
    const result = await this.service.getBusiness(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Cart, {
    nullable: true,
    name: "cart",
  })
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "read",
    possession: "any",
  })
  async resolveFieldCart(
    @graphql.Parent() parent: Order
  ): Promise<Cart | null> {
    const result = await this.service.getCart(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Address, {
    nullable: true,
    name: "customer",
  })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  async resolveFieldCustomer(
    @graphql.Parent() parent: Order
  ): Promise<Address | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
