import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "bun:test";
import WalletService from "../../src/modules/wallet/service/WalletService";
import MongoHelper from "../../src/infra/db/MongoHelper";

describe("WalletService Tests", () => {
  const service = new WalletService();
  const mongoHelper = new MongoHelper();
  beforeAll(async () => {
    await mongoHelper.connectDatabase();
  });

  beforeEach(async () => {
    await mongoHelper.clearDatabase();
  });

  afterAll(async () => {
    await mongoHelper.closeDatabase();
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

  it("should return all wallets", async () => {
    const wallet = {
      name: "MY_NEW_WALLET",
    };
    await service.createWallet(wallet);
    const result = await service.getWallets();

    expect(result.length).toBe(1);
    expect(result[0].name).toBe(wallet.name);
  });
});
