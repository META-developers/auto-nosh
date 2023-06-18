import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OpenTimeResolverBase } from "./base/openTime.resolver.base";
import { OpenTime } from "./base/OpenTime";
import { OpenTimeService } from "./openTime.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OpenTime)
export class OpenTimeResolver extends OpenTimeResolverBase {
  constructor(
    protected readonly service: OpenTimeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
