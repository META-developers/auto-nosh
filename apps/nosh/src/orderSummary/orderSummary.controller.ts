import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderSummaryService } from "./orderSummary.service";
import { OrderSummaryControllerBase } from "./base/orderSummary.controller.base";

@swagger.ApiTags("orderSummaries")
@common.Controller("orderSummaries")
export class OrderSummaryController extends OrderSummaryControllerBase {
  constructor(
    protected readonly service: OrderSummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
