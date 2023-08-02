import mongoose from 'mongoose';

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1) {
        return;
    }
    const dbUri = process.env.DB_URI;

    if (!dbUri) {
        throw new Error("DB_URI is not defined in the environment variables.");
    }

    mongoose.connect(dbUri);
};
export default dbConnect;