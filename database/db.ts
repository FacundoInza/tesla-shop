import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let MONGO_URL: string | undefined;

if (process.env.NODE_ENV === "development") {
  MONGO_URL = process.env.MONGO_LOCAL_URL;
} else {
  MONGO_URL = process.env.MONGO_URL_PROD;
}

/**
 * 0 = disconnected
 * 1 = Conenected
 * 2 = Connecting
 * 3 = Disconnecting
 */

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("Ya estamos conectados");
    return;
  }
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("Usando Conexion Anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(MONGO_URL || "");
  mongoConnection.isConnected = 1;
  console.log("Conectado a MongoDb", MONGO_URL);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();

  mongoConnection.isConnected = 0;
  console.log("Desconectado de MongoDB");
};
