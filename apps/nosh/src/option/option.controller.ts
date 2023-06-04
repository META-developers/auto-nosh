import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OptionService } from "./option.service";
import { OptionControllerBase } from "./base/option.controller.base";

@swagger.ApiTags("options")
@common.Controller("options")
export class OptionController extends OptionControllerBase {
  constructor(
    protected readonly service: OptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
