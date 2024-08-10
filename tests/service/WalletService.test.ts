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
import Factory from "../fixtures/Factory";

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
    const wallet = Factory.buildWallet();
    const result = await service.createWallet(wallet);

    expect(result.name).toBe(wallet.name);
    expect(result.userId).toBe(wallet.userId);
    expect(result.id).toBeTruthy();
    expect(result.createdAt).toBeTruthy();
    expect(result.updatedAt).toBeTruthy();
  });

  it("should return all wallets", async () => {
    const wallet = Factory.buildWallet();
    await service.createWallet(wallet);
    const result = await service.getWallets();

    expect(result.length).toBe(1);
    expect(result[0].name).toBe(wallet.name);
  });

  it("should return all user wallets", async () => {
    await service.createWallet(Factory.buildWallet());
    await service.createWallet(Factory.buildWallet());

    const userId = crypto.randomUUID();
    await service.createWallet({ ...Factory.buildWallet(), userId });
    await service.createWallet({ ...Factory.buildWallet(), userId });

    const result = await service.getUserWallets(userId);

    expect(result.length).toBe(2);
  });
});
