import mongoose from "mongoose";

let isConnected: boolean = false;

export async function connectToDatabase() {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    throw new Error("Missing MONGODB_URL");
  }
  if (isConnected) {
    return console.log("Mongodatabase is already connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "UnStuck",
    });
    isConnected = true;
    console.log("Mongodatabase connected");
    // show all collections
  } catch (error) {
    console.log("Mongodatabase connection failed");
  }
}

// untuck
