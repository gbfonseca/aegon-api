import * as mongoose from "mongoose";

const DATABASE_CONNECTION =
  process.env.DATABASE_CONNECTION || "mongodb://127.0.0.1:27017";

export default class MongoHelper {
  private client = mongoose.createConnection(DATABASE_CONNECTION);
  async connectDatabase() {
    await mongoose.connect(DATABASE_CONNECTION);
  }

  async closeDatabase() {
    await this.client.close();
  }

  async clearDatabase() {
    await this.client.dropDatabase();
  }
}
