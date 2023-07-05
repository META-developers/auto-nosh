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
import { OrderEventService } from "../orderEvent.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderEventCreateInput } from "./OrderEventCreateInput";
import { OrderEventWhereInput } from "./OrderEventWhereInput";
import { OrderEventWhereUniqueInput } from "./OrderEventWhereUniqueInput";
import { OrderEventFindManyArgs } from "./OrderEventFindManyArgs";
import { OrderEventUpdateInput } from "./OrderEventUpdateInput";
import { OrderEvent } from "./OrderEvent";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderEventControllerBase {
  constructor(
    protected readonly service: OrderEventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrderEvent })
  @nestAccessControl.UseRoles({
    resource: "OrderEvent",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: OrderEventCreateInput
  ): Promise<OrderEvent> {
    return await this.service.create({
      data: {
        ...data,

        order: {
          connect: data.order,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OrderEvent] })
  @ApiNestedQuery(OrderEventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderEvent",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<OrderEvent[]> {
    const args = plainToClass(OrderEventFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrderEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderEvent",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: OrderEventWhereUniqueInput
  ): Promise<OrderEvent | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OrderEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderEvent",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: OrderEventWhereUniqueInput,
    @common.Body() data: OrderEventUpdateInput
  ): Promise<OrderEvent | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          order: {
            connect: data.order,
          },
        },
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
  @swagger.ApiOkResponse({ type: OrderEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderEvent",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: OrderEventWhereUniqueInput
  ): Promise<OrderEvent | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
