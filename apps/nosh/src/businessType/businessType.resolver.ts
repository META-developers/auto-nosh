import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BusinessTypeResolverBase } from "./base/businessType.resolver.base";
import { BusinessType } from "./base/BusinessType";
import { BusinessTypeService } from "./businessType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BusinessType)
export class BusinessTypeResolver extends BusinessTypeResolverBase {
  constructor(
    protected readonly service: BusinessTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
