import { CreateWalletDTO } from "../models/CreateWalletDTO";
import { Wallet } from "../../../infra/db/schemas/wallet";
import { DateTimeHelper } from "../../../utils/DateTimeHelper";

export default class WalletService {
  async createWallet(walletDTO: CreateWalletDTO): Promise<Wallet> {
    const wallet = new Wallet({
      ...walletDTO,
      id: crypto.randomUUID(),
      createdAt: DateTimeHelper.getCurrentDate(),
      updatedAt: DateTimeHelper.getCurrentDate(),
    });
    await wallet.save();
    return wallet;
  }
}
