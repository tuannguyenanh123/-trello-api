import { MongoClient } from "mongodb";
import { env } from "./environtment";

let dbInstance = null;

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
    // connect the client to server
    await client.connect();
    // assign clientDB to our dbInstance

    dbInstance = client.db(env.DATABASE_NAME)
  
};

// get databases instance
export const getDB =  () =>{
    if(!dbInstance) throw new Error('Must connect to database first')
    return  dbInstance;
}



// const listDBs = async (client) => {
//   const databases = await client.db().admin().listDatabases();
//   console.log("your databases");
//   databases.databases.forEach((db) => console.log("-", db));
// };
