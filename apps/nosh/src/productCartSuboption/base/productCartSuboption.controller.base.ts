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
import { ProductCartSuboptionService } from "../productCartSuboption.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductCartSuboptionCreateInput } from "./ProductCartSuboptionCreateInput";
import { ProductCartSuboptionWhereInput } from "./ProductCartSuboptionWhereInput";
import { ProductCartSuboptionWhereUniqueInput } from "./ProductCartSuboptionWhereUniqueInput";
import { ProductCartSuboptionFindManyArgs } from "./ProductCartSuboptionFindManyArgs";
import { ProductCartSuboptionUpdateInput } from "./ProductCartSuboptionUpdateInput";
import { ProductCartSuboption } from "./ProductCartSuboption";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductCartSuboptionControllerBase {
  constructor(
    protected readonly service: ProductCartSuboptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductCartSuboption })
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: ProductCartSuboptionCreateInput
  ): Promise<ProductCartSuboption> {
    return await this.service.create({
      data: {
        ...data,

        productCartOptions: {
          connect: data.productCartOptions,
        },

        suboption: {
          connect: data.suboption,
        },
      },
      select: {
        createdAt: true,
        id: true,
        position: true,
        price: true,

        productCartOptions: {
          select: {
            id: true,
          },
        },

        quantity: true,
        selected: true,

        suboption: {
          select: {
            id: true,
          },
        },

        total: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductCartSuboption] })
  @ApiNestedQuery(ProductCartSuboptionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<ProductCartSuboption[]> {
    const args = plainToClass(ProductCartSuboptionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        position: true,
        price: true,

        productCartOptions: {
          select: {
            id: true,
          },
        },

        quantity: true,
        selected: true,

        suboption: {
          select: {
            id: true,
          },
        },

        total: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductCartSuboption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ProductCartSuboptionWhereUniqueInput
  ): Promise<ProductCartSuboption | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        position: true,
        price: true,

        productCartOptions: {
          select: {
            id: true,
          },
        },

        quantity: true,
        selected: true,

        suboption: {
          select: {
            id: true,
          },
        },

        total: true,
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
  @swagger.ApiOkResponse({ type: ProductCartSuboption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ProductCartSuboptionWhereUniqueInput,
    @common.Body() data: ProductCartSuboptionUpdateInput
  ): Promise<ProductCartSuboption | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          productCartOptions: {
            connect: data.productCartOptions,
          },

          suboption: {
            connect: data.suboption,
          },
        },
        select: {
          createdAt: true,
          id: true,
          position: true,
          price: true,

          productCartOptions: {
            select: {
              id: true,
            },
          },

          quantity: true,
          selected: true,

          suboption: {
            select: {
              id: true,
            },
          },

          total: true,
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
  @swagger.ApiOkResponse({ type: ProductCartSuboption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ProductCartSuboptionWhereUniqueInput
  ): Promise<ProductCartSuboption | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          position: true,
          price: true,

          productCartOptions: {
            select: {
              id: true,
            },
          },

          quantity: true,
          selected: true,

          suboption: {
            select: {
              id: true,
            },
          },

          total: true,
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
