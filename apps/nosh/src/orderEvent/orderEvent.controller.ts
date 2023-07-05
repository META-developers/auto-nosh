import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderEventService } from "./orderEvent.service";
import { OrderEventControllerBase } from "./base/orderEvent.controller.base";

@swagger.ApiTags("orderEvents")
@common.Controller("orderEvents")
export class OrderEventController extends OrderEventControllerBase {
  constructor(
    protected readonly service: OrderEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
