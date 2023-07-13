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
import { CreateCuisineTypeArgs } from "./CreateCuisineTypeArgs";
import { UpdateCuisineTypeArgs } from "./UpdateCuisineTypeArgs";
import { DeleteCuisineTypeArgs } from "./DeleteCuisineTypeArgs";
import { CuisineTypeCountArgs } from "./CuisineTypeCountArgs";
import { CuisineTypeFindManyArgs } from "./CuisineTypeFindManyArgs";
import { CuisineTypeFindUniqueArgs } from "./CuisineTypeFindUniqueArgs";
import { CuisineType } from "./CuisineType";
import { BusinessFindManyArgs } from "../../business/base/BusinessFindManyArgs";
import { Business } from "../../business/base/Business";
import { CuisineTypeService } from "../cuisineType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CuisineType)
export class CuisineTypeResolverBase {
  constructor(
    protected readonly service: CuisineTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CuisineType",
    action: "read",
    possession: "any",
  })
  async _cuisineTypesMeta(
    @graphql.Args() args: CuisineTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CuisineType])
  @nestAccessControl.UseRoles({
    resource: "CuisineType",
    action: "read",
    possession: "any",
  })
  async cuisineTypes(
    @graphql.Args() args: CuisineTypeFindManyArgs
  ): Promise<CuisineType[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CuisineType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CuisineType",
    action: "read",
    possession: "own",
  })
  async cuisineType(
    @graphql.Args() args: CuisineTypeFindUniqueArgs
  ): Promise<CuisineType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CuisineType)
  @nestAccessControl.UseRoles({
    resource: "CuisineType",
    action: "create",
    possession: "any",
  })
  async createCuisineType(
    @graphql.Args() args: CreateCuisineTypeArgs
  ): Promise<CuisineType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CuisineType)
  @nestAccessControl.UseRoles({
    resource: "CuisineType",
    action: "update",
    possession: "any",
  })
  async updateCuisineType(
    @graphql.Args() args: UpdateCuisineTypeArgs
  ): Promise<CuisineType | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => CuisineType)
  @nestAccessControl.UseRoles({
    resource: "CuisineType",
    action: "delete",
    possession: "any",
  })
  async deleteCuisineType(
    @graphql.Args() args: DeleteCuisineTypeArgs
  ): Promise<CuisineType | null> {
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
  @graphql.ResolveField(() => [Business], { name: "business" })
  @nestAccessControl.UseRoles({
    resource: "Business",
    action: "read",
    possession: "any",
  })
  async resolveFieldBusiness(
    @graphql.Parent() parent: CuisineType,
    @graphql.Args() args: BusinessFindManyArgs
  ): Promise<Business[]> {
    const results = await this.service.findBusiness(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}