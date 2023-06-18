import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OpenTimeService } from "./openTime.service";
import { OpenTimeControllerBase } from "./base/openTime.controller.base";

@swagger.ApiTags("openTimes")
@common.Controller("openTimes")
export class OpenTimeController extends OpenTimeControllerBase {
  constructor(
    protected readonly service: OpenTimeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
