import dns from 'node:dns';
import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    dns.setServers(['1.1.1.1']);

    await mongoose.connect(process.env.MONGO_URL);

    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.log('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};
