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
import { ProductCartOptionService } from "../productCartOption.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductCartOptionCreateInput } from "./ProductCartOptionCreateInput";
import { ProductCartOptionWhereInput } from "./ProductCartOptionWhereInput";
import { ProductCartOptionWhereUniqueInput } from "./ProductCartOptionWhereUniqueInput";
import { ProductCartOptionFindManyArgs } from "./ProductCartOptionFindManyArgs";
import { ProductCartOptionUpdateInput } from "./ProductCartOptionUpdateInput";
import { ProductCartOption } from "./ProductCartOption";
import { ProductCartSuboptionFindManyArgs } from "../../productCartSuboption/base/ProductCartSuboptionFindManyArgs";
import { ProductCartSuboption } from "../../productCartSuboption/base/ProductCartSuboption";
import { ProductCartSuboptionWhereUniqueInput } from "../../productCartSuboption/base/ProductCartSuboptionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductCartOptionControllerBase {
  constructor(
    protected readonly service: ProductCartOptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductCartOption })
  @nestAccessControl.UseRoles({
    resource: "ProductCartOption",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: ProductCartOptionCreateInput
  ): Promise<ProductCartOption> {
    return await this.service.create({
      data: {
        ...data,

        option: {
          connect: data.option,
        },

        productCart: data.productCart
          ? {
              connect: data.productCart,
            }
          : undefined,
      },
      select: {
        balance: true,
        createdAt: true,
        id: true,

        option: {
          select: {
            id: true,
          },
        },

        productCart: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductCartOption] })
  @ApiNestedQuery(ProductCartOptionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductCartOption",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<ProductCartOption[]> {
    const args = plainToClass(ProductCartOptionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        balance: true,
        createdAt: true,
        id: true,

        option: {
          select: {
            id: true,
          },
        },

        productCart: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductCartOption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductCartOption",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ProductCartOptionWhereUniqueInput
  ): Promise<ProductCartOption | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        balance: true,
        createdAt: true,
        id: true,

        option: {
          select: {
            id: true,
          },
        },

        productCart: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: ProductCartOption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductCartOption",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ProductCartOptionWhereUniqueInput,
    @common.Body() data: ProductCartOptionUpdateInput
  ): Promise<ProductCartOption | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          option: {
            connect: data.option,
          },

          productCart: data.productCart
            ? {
                connect: data.productCart,
              }
            : undefined,
        },
        select: {
          balance: true,
          createdAt: true,
          id: true,

          option: {
            select: {
              id: true,
            },
          },

          productCart: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: ProductCartOption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductCartOption",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ProductCartOptionWhereUniqueInput
  ): Promise<ProductCartOption | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          balance: true,
          createdAt: true,
          id: true,

          option: {
            select: {
              id: true,
            },
          },

          productCart: {
            select: {
              id: true,
            },
          },

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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/productCartSuboption")
  @ApiNestedQuery(ProductCartSuboptionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductCartSuboption",
    action: "read",
    possession: "any",
  })
  async findManyProductCartSuboption(
    @common.Req() request: Request,
    @common.Param() params: ProductCartOptionWhereUniqueInput
  ): Promise<ProductCartSuboption[]> {
    const query = plainToClass(ProductCartSuboptionFindManyArgs, request.query);
    const results = await this.service.findProductCartSuboption(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        position: true,
        price: true,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/productCartSuboption")
  @nestAccessControl.UseRoles({
    resource: "ProductCartOption",
    action: "update",
    possession: "any",
  })
  async connectProductCartSuboption(
    @common.Param() params: ProductCartOptionWhereUniqueInput,
    @common.Body() body: ProductCartSuboptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productCartSuboption: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/productCartSuboption")
  @nestAccessControl.UseRoles({
    resource: "ProductCartOption",
    action: "update",
    possession: "any",
  })
  async updateProductCartSuboption(
    @common.Param() params: ProductCartOptionWhereUniqueInput,
    @common.Body() body: ProductCartSuboptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productCartSuboption: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/productCartSuboption")
  @nestAccessControl.UseRoles({
    resource: "ProductCartOption",
    action: "update",
    possession: "any",
  })
  async disconnectProductCartSuboption(
    @common.Param() params: ProductCartOptionWhereUniqueInput,
    @common.Body() body: ProductCartSuboptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productCartSuboption: {
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
