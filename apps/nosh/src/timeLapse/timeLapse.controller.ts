import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimeLapseService } from "./timeLapse.service";
import { TimeLapseControllerBase } from "./base/timeLapse.controller.base";

@swagger.ApiTags("timeLapses")
@common.Controller("timeLapses")
export class TimeLapseController extends TimeLapseControllerBase {
  constructor(
    protected readonly service: TimeLapseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
