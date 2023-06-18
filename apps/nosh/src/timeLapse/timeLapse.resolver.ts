import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TimeLapseResolverBase } from "./base/timeLapse.resolver.base";
import { TimeLapse } from "./base/TimeLapse";
import { TimeLapseService } from "./timeLapse.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TimeLapse)
export class TimeLapseResolver extends TimeLapseResolverBase {
  constructor(
    protected readonly service: TimeLapseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
