import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../app.module";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { Client } from "pg";
import { v4 as uuidv4 } from "uuid";

describe("Testes e2e para a rota /users", () => {
  let app: INestApplication;
  let pgClient: Client;

  const generateUUID = () => uuidv4();

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const config = {
      user: "klz",
      password: "Carlos03",
      host: "localhost",
      port: 5432,
      database: "black_beard_api",
    };
    pgClient = new Client(config);
    await pgClient.connect();
  });

  afterAll(async () => {
    if (pgClient) {
      await pgClient.end();
    }
  });

  afterAll(async () => {
    if (pgClient) {
      await pgClient.end();
    }
  });

  it("(POST) Deve ser possível criar um novo usuário", async () => {
    const userData = {
      name: "John Doe",
      companyName: "Example Inc.",
      email: `${generateUUID()}@mail.com`,
      passwordHash: generateUUID(),
    };

    const createUserResponse = await request(app.getHttpServer())
      .post("/users")
      .send(userData)
      .expect(201);

    const userId = createUserResponse.body.id;

    expect(createUserResponse.body).toBeDefined();
    expect(createUserResponse.body.name).toEqual(userData.name);
    expect(createUserResponse.body.companyName).toEqual(userData.companyName);
    expect(createUserResponse.body.email).toEqual(userData.email);
    expect(createUserResponse.body.createdAt).toBeDefined();
    expect(createUserResponse.body.updatedAt).toBeDefined();
    expect(createUserResponse.body.lastAccess).toBeDefined();

    await pgClient.query('DELETE FROM "User" WHERE id = $1', [userId]);
  });

});
