import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CuisineTypeService } from "./cuisineType.service";
import { CuisineTypeControllerBase } from "./base/cuisineType.controller.base";

@swagger.ApiTags("cuisineTypes")
@common.Controller("cuisineTypes")
export class CuisineTypeController extends CuisineTypeControllerBase {
  constructor(
    protected readonly service: CuisineTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
