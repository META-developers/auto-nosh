import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrderSummaryResolverBase } from "./base/orderSummary.resolver.base";
import { OrderSummary } from "./base/OrderSummary";
import { OrderSummaryService } from "./orderSummary.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OrderSummary)
export class OrderSummaryResolver extends OrderSummaryResolverBase {
  constructor(
    protected readonly service: OrderSummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
