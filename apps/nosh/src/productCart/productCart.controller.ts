import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductCartService } from "./productCart.service";
import { ProductCartControllerBase } from "./base/productCart.controller.base";

@swagger.ApiTags("productCarts")
@common.Controller("productCarts")
export class ProductCartController extends ProductCartControllerBase {
  constructor(
    protected readonly service: ProductCartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
