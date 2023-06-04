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
import { CreateProductCartArgs } from "./CreateProductCartArgs";
import { UpdateProductCartArgs } from "./UpdateProductCartArgs";
import { DeleteProductCartArgs } from "./DeleteProductCartArgs";
import { ProductCartFindManyArgs } from "./ProductCartFindManyArgs";
import { ProductCartFindUniqueArgs } from "./ProductCartFindUniqueArgs";
import { ProductCart } from "./ProductCart";
import { ProductCartOptionFindManyArgs } from "../../productCartOption/base/ProductCartOptionFindManyArgs";
import { ProductCartOption } from "../../productCartOption/base/ProductCartOption";
import { Product } from "../../product/base/Product";
import { ProductCartService } from "../productCart.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductCart)
export class ProductCartResolverBase {
  constructor(
    protected readonly service: ProductCartService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductCart",
    action: "read",
    possession: "any",
  })
  async _productCartsMeta(
    @graphql.Args() args: ProductCartFindManyArgs
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
  @graphql.Query(() => [ProductCart])
  @nestAccessControl.UseRoles({
    resource: "ProductCart",
    action: "read",
    possession: "any",
  })
  async productCarts(
    @graphql.Args() args: ProductCartFindManyArgs
  ): Promise<ProductCart[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProductCart, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductCart",
    action: "read",
    possession: "own",
  })
  async productCart(
    @graphql.Args() args: ProductCartFindUniqueArgs
  ): Promise<ProductCart | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductCart)
  @nestAccessControl.UseRoles({
    resource: "ProductCart",
    action: "create",
    possession: "any",
  })
  async createProductCart(
    @graphql.Args() args: CreateProductCartArgs
  ): Promise<ProductCart> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        product: {
          connect: args.data.product,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductCart)
  @nestAccessControl.UseRoles({
    resource: "ProductCart",
    action: "update",
    possession: "any",
  })
  async updateProductCart(
    @graphql.Args() args: UpdateProductCartArgs
  ): Promise<ProductCart | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          product: {
            connect: args.data.product,
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

  @graphql.Mutation(() => ProductCart)
  @nestAccessControl.UseRoles({
    resource: "ProductCart",
    action: "delete",
    possession: "any",
  })
  async deleteProductCart(
    @graphql.Args() args: DeleteProductCartArgs
  ): Promise<ProductCart | null> {
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
    @graphql.Parent() parent: ProductCart,
    @graphql.Args() args: ProductCartOptionFindManyArgs
  ): Promise<ProductCartOption[]> {
    const results = await this.service.findProductCartOptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async resolveFieldProduct(
    @graphql.Parent() parent: ProductCart
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
