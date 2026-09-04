import dns from 'node:dns';
import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  dns.setServers(['1.1.1.1']);

  await mongoose.connect(process.env.MONGO_URL);

  console.log('✅ MongoDB connection established successfully');
};
