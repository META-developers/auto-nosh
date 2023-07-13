import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BusinessTypeService } from "./businessType.service";
import { BusinessTypeControllerBase } from "./base/businessType.controller.base";

@swagger.ApiTags("businessTypes")
@common.Controller("businessTypes")
export class BusinessTypeController extends BusinessTypeControllerBase {
  constructor(
    protected readonly service: BusinessTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
