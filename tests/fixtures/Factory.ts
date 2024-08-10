export default class Factory {
  static buildWallet() {
    return {
      name: "MY_NEW_WALLET",
      userId: crypto.randomUUID(),
    };
  }
}
