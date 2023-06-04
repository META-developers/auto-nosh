import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductCartSuboptionService } from "./productCartSuboption.service";
import { ProductCartSuboptionControllerBase } from "./base/productCartSuboption.controller.base";

@swagger.ApiTags("productCartSuboptions")
@common.Controller("productCartSuboptions")
export class ProductCartSuboptionController extends ProductCartSuboptionControllerBase {
  constructor(
    protected readonly service: ProductCartSuboptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
