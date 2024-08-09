import * as mongoose from "mongoose";

export default class MongoHelper {
  async connectDatabase() {
    const client = await mongoose.connect(
      "mongodb://127.0.0.1:27017/mongoose-app"
    );
    return client;
  }
}
