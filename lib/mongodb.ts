import { MongoClient, ServerApiVersion } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createClient(uri: string): Promise<MongoClient> {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.connect();
}

export function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return Promise.reject(new Error("Missing MONGODB_URI environment variable."));
  }
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClient(uri);
    }
    return global._mongoClientPromise;
  }
  return createClient(uri);
}

export function getDbName(): string {
  return process.env.MONGODB_DB ?? "uppath";
}
