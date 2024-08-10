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

  async getWallets(): Promise<Wallet[]> {
    return await Wallet.find();
  }

  async getUserWallets(userId: string): Promise<Wallet[]> {
    const data = await Wallet.find({
      userId,
    });

    return data;
  }

  async updateWallet(updateWallet: Partial<Wallet>) {
    if (!updateWallet.id) throw new Error("Wallet id is required to update");

    const wallet = await Wallet.findOne({
      id: updateWallet.id,
    });
    if (!wallet) throw Error("Wallet not found");

    await Wallet.updateOne({
      id: updateWallet.id,
      ...updateWallet,
    });

    return {
      ...wallet,
      ...updateWallet,
    };
  }
}
