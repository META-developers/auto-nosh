import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CuisineTypeResolverBase } from "./base/cuisineType.resolver.base";
import { CuisineType } from "./base/CuisineType";
import { CuisineTypeService } from "./cuisineType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CuisineType)
export class CuisineTypeResolver extends CuisineTypeResolverBase {
  constructor(
    protected readonly service: CuisineTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
