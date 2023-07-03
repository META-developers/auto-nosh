import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { OrderSummaryController } from "../orderSummary.controller";
import { OrderSummaryService } from "../orderSummary.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  deliveryPrice: 42.42,
  deliveryPriceWithDiscount: 42.42,
  discount: 42.42,
  driverTip: 42.42,
  driverTipRate: 42.42,
  id: "exampleId",
  serviceFee: 42.42,
  serviceFeeRate: 42.42,
  serviceFeeWithDiscount: 42.42,
  subtotal: 42.42,
  subtotalWithDiscount: 42.42,
  tax: 42.42,
  taxAfterDiscount: 42.42,
  taxRate: 42.42,
  taxWithDiscount: 42.42,
  total: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  deliveryPrice: 42.42,
  deliveryPriceWithDiscount: 42.42,
  discount: 42.42,
  driverTip: 42.42,
  driverTipRate: 42.42,
  id: "exampleId",
  serviceFee: 42.42,
  serviceFeeRate: 42.42,
  serviceFeeWithDiscount: 42.42,
  subtotal: 42.42,
  subtotalWithDiscount: 42.42,
  tax: 42.42,
  taxAfterDiscount: 42.42,
  taxRate: 42.42,
  taxWithDiscount: 42.42,
  total: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    deliveryPrice: 42.42,
    deliveryPriceWithDiscount: 42.42,
    discount: 42.42,
    driverTip: 42.42,
    driverTipRate: 42.42,
    id: "exampleId",
    serviceFee: 42.42,
    serviceFeeRate: 42.42,
    serviceFeeWithDiscount: 42.42,
    subtotal: 42.42,
    subtotalWithDiscount: 42.42,
    tax: 42.42,
    taxAfterDiscount: 42.42,
    taxRate: 42.42,
    taxWithDiscount: 42.42,
    total: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  deliveryPrice: 42.42,
  deliveryPriceWithDiscount: 42.42,
  discount: 42.42,
  driverTip: 42.42,
  driverTipRate: 42.42,
  id: "exampleId",
  serviceFee: 42.42,
  serviceFeeRate: 42.42,
  serviceFeeWithDiscount: 42.42,
  subtotal: 42.42,
  subtotalWithDiscount: 42.42,
  tax: 42.42,
  taxAfterDiscount: 42.42,
  taxRate: 42.42,
  taxWithDiscount: 42.42,
  total: 42.42,
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("OrderSummary", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrderSummaryService,
          useValue: service,
        },
      ],
      controllers: [OrderSummaryController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /orderSummaries", async () => {
    await request(app.getHttpServer())
      .post("/orderSummaries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /orderSummaries", async () => {
    await request(app.getHttpServer())
      .get("/orderSummaries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /orderSummaries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orderSummaries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /orderSummaries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orderSummaries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /orderSummaries existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/orderSummaries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/orderSummaries")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
