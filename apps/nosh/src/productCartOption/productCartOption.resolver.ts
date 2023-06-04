import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductCartOptionResolverBase } from "./base/productCartOption.resolver.base";
import { ProductCartOption } from "./base/ProductCartOption";
import { ProductCartOptionService } from "./productCartOption.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductCartOption)
export class ProductCartOptionResolver extends ProductCartOptionResolverBase {
  constructor(
    protected readonly service: ProductCartOptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
