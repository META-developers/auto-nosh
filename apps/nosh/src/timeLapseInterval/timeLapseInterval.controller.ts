import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimeLapseIntervalService } from "./timeLapseInterval.service";
import { TimeLapseIntervalControllerBase } from "./base/timeLapseInterval.controller.base";

@swagger.ApiTags("timeLapseIntervals")
@common.Controller("timeLapseIntervals")
export class TimeLapseIntervalController extends TimeLapseIntervalControllerBase {
  constructor(
    protected readonly service: TimeLapseIntervalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
