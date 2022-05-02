import { MongoClient } from "mongodb";
import { env } from "./environtment";

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  try {
    // connect the client to server
    await client.connect();
    console.log("connected to server");
    await listDBs(client);
  } finally {
    //ensure that the client will close when finish/error
    await client.close();
  }
};

const listDBs = async (client) => {
  const databases = await client.db().admin().listDatabases();
  console.log("your databases");
  databases.databases.forEach((db) => console.log("-", db));
};
