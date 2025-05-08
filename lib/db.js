import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables.");
}

const client = new MongoClient(MONGODB_URI, {});

let db;

try {
  await client.connect();
  db = client.db("sample_mflix"); // explicitly specify DB name
  // console.log("✅ Connected to MongoDB Atlas");
} catch (error) {
  console.error("❌ MongoDB connection error:", error);
  throw error;
}

export { db };

// import { MongoClient } from "mongodb";

// const OPTIONS = {};
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

// const client = new MongoClient(MONGODB_URI, OPTIONS);

// export const db = client.db("sample_mflix");
