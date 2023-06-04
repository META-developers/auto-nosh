import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SuboptionService } from "./suboption.service";
import { SuboptionControllerBase } from "./base/suboption.controller.base";

@swagger.ApiTags("suboptions")
@common.Controller("suboptions")
export class SuboptionController extends SuboptionControllerBase {
  constructor(
    protected readonly service: SuboptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
