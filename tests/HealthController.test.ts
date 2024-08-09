// test/index.test.ts
import { describe, expect, it } from "bun:test";
import { Elysia } from "elysia";
import HealthController from "../src/modules/common/controller/HealthController";

const app = new Elysia().use(HealthController);

describe("Elysia", () => {
  it("return a response", async () => {
    const response = await app
      .handle(new Request("http://localhost/health"))
      .then((res) => res.json());

    expect(response).toEqual({ message: "I am Healthy" });
  });
});
