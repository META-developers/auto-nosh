import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CloseTimeService } from "./closeTime.service";
import { CloseTimeControllerBase } from "./base/closeTime.controller.base";

@swagger.ApiTags("closeTimes")
@common.Controller("closeTimes")
export class CloseTimeController extends CloseTimeControllerBase {
  constructor(
    protected readonly service: CloseTimeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
