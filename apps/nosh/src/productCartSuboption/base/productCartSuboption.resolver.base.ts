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
import { CreateProductCartSuboptionArgs } from "./CreateProductCartSuboptionArgs";
import { UpdateProductCartSuboptionArgs } from "./UpdateProductCartSuboptionArgs";
import { DeleteProductCartSuboptionArgs } from "./DeleteProductCartSuboptionArgs";
import { ProductCartSuboptionFindManyArgs } from "./ProductCartSuboptionFindManyArgs";
import { ProductCartSuboptionFindUniqueArgs } from "./ProductCartSuboptionFindUniqueArgs";
import { ProductCartSuboption } from "./ProductCartSuboption";
import { ProductCartOptionFindManyArgs } from "../../productCartOption/base/ProductCartOptionFindManyArgs";
import { ProductCartOption } from "../../productCartOption/base/ProductCartOption";
import { Suboption } from "../../suboption/base/Suboption";
import { ProductCartSuboptionService } from "../productCartSuboption.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductCartSuboption)
export class ProductCartSuboptionResolverBase {
  constructor(
    protected readonly service: ProductCartSuboptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "read",
    possession: "any",
  })
  async _productCartSuboptionsMeta(
    @graphql.Args() args: ProductCartSuboptionFindManyArgs
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
  @graphql.Query(() => [ProductCartSuboption])
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "read",
    possession: "any",
  })
  async productCartSuboptions(
    @graphql.Args() args: ProductCartSuboptionFindManyArgs
  ): Promise<ProductCartSuboption[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProductCartSuboption, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "read",
    possession: "own",
  })
  async productCartSuboption(
    @graphql.Args() args: ProductCartSuboptionFindUniqueArgs
  ): Promise<ProductCartSuboption | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductCartSuboption)
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "create",
    possession: "any",
  })
  async createProductCartSuboption(
    @graphql.Args() args: CreateProductCartSuboptionArgs
  ): Promise<ProductCartSuboption> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        suboption: args.data.suboption
          ? {
              connect: args.data.suboption,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductCartSuboption)
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "update",
    possession: "any",
  })
  async updateProductCartSuboption(
    @graphql.Args() args: UpdateProductCartSuboptionArgs
  ): Promise<ProductCartSuboption | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          suboption: args.data.suboption
            ? {
                connect: args.data.suboption,
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

  @graphql.Mutation(() => ProductCartSuboption)
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "delete",
    possession: "any",
  })
  async deleteProductCartSuboption(
    @graphql.Args() args: DeleteProductCartSuboptionArgs
  ): Promise<ProductCartSuboption | null> {
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
  @graphql.ResolveField(() => [ProductCartOption], {
    name: "productCartOptions",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductCartOption",
    action: "read",
    possession: "any",
  })
  async resolveFieldProductCartOptions(
    @graphql.Parent() parent: ProductCartSuboption,
    @graphql.Args() args: ProductCartOptionFindManyArgs
  ): Promise<ProductCartOption[]> {
    const results = await this.service.findProductCartOptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Suboption, {
    nullable: true,
    name: "suboption",
  })
  @nestAccessControl.UseRoles({
    resource: "Suboption",
    action: "read",
    possession: "any",
  })
  async resolveFieldSuboption(
    @graphql.Parent() parent: ProductCartSuboption
  ): Promise<Suboption | null> {
    const result = await this.service.getSuboption(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
