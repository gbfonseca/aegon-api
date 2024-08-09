import { beforeAll, describe, expect, it } from "bun:test";
import WalletService from "../../src/modules/wallet/service/WalletService";
import { Helper } from "../Helper";
import MongoHelper from "../../src/infra/db/MongoHelper";

describe("WalletService Tests", () => {
  const service = new WalletService();
  const mongoHelper = new MongoHelper();
  beforeAll(async () => {
    await mongoHelper.connectDatabase();
  });

  it("should create wallet with success", async () => {
    const wallet = {
      name: "MY_NEW_WALLET",
    };
    const result = await service.createWallet(wallet);

    expect(result.name).toBe(wallet.name);
    expect(result.id).toBeTruthy();
    expect(result.createdAt).toBeTruthy();
    expect(result.updatedAt).toBeTruthy();
  });
});
