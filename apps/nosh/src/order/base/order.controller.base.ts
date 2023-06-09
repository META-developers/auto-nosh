/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrderService } from "../order.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderCreateInput } from "./OrderCreateInput";
import { OrderWhereInput } from "./OrderWhereInput";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderUpdateInput } from "./OrderUpdateInput";
import { Order } from "./Order";
import { OrderEventFindManyArgs } from "../../orderEvent/base/OrderEventFindManyArgs";
import { OrderEvent } from "../../orderEvent/base/OrderEvent";
import { OrderEventWhereUniqueInput } from "../../orderEvent/base/OrderEventWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderControllerBase {
  constructor(
    protected readonly service: OrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Order })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: OrderCreateInput): Promise<Order> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() data: OrderUpdateInput
  ): Promise<Order | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/orderEvents")
  @ApiNestedQuery(OrderEventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderEvent",
    action: "read",
    possession: "any",
  })
  async findManyOrderEvents(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<OrderEvent[]> {
    const query = plainToClass(OrderEventFindManyArgs, request.query);
    const results = await this.service.findOrderEvents(params.id, {
      ...query,
      select: {
        createdAt: true,
        eventSource: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orderEvents")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async connectOrderEvents(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderEvents: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orderEvents")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateOrderEvents(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderEvents: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orderEvents")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async disconnectOrderEvents(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderEventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderEvents: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
