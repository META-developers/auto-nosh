import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TimeLapseIntervalResolverBase } from "./base/timeLapseInterval.resolver.base";
import { TimeLapseInterval } from "./base/TimeLapseInterval";
import { TimeLapseIntervalService } from "./timeLapseInterval.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TimeLapseInterval)
export class TimeLapseIntervalResolver extends TimeLapseIntervalResolverBase {
  constructor(
    protected readonly service: TimeLapseIntervalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
