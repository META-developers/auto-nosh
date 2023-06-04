import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductCartOptionService } from "./productCartOption.service";
import { ProductCartOptionControllerBase } from "./base/productCartOption.controller.base";

@swagger.ApiTags("productCartOptions")
@common.Controller("productCartOptions")
export class ProductCartOptionController extends ProductCartOptionControllerBase {
  constructor(
    protected readonly service: ProductCartOptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
