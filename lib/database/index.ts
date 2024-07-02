import mongoose from 'mongoose'
import { createEmptyCacheNode } from 'next/dist/client/components/app-router';

const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error('MONGOD_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, { dbName: 'Crowd Sync', bufferCommands: false, })

    cached.conn = await cached.promise;

    return cached.conn;
}

//? This is a serverless environment and connections need to be manually managed!
