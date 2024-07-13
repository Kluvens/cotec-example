import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.log('MongoDB URI is not defined in environment variables');
    return;
  }

  try {
    await mongoose.connect(uri, {
      dbName: 'share_prompt',
    });

    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
