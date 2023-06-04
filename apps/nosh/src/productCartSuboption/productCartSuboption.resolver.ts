import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductCartSuboptionResolverBase } from "./base/productCartSuboption.resolver.base";
import { ProductCartSuboption } from "./base/ProductCartSuboption";
import { ProductCartSuboptionService } from "./productCartSuboption.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductCartSuboption)
export class ProductCartSuboptionResolver extends ProductCartSuboptionResolverBase {
  constructor(
    protected readonly service: ProductCartSuboptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
