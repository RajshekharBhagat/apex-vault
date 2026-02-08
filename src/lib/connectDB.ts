type ConnectionObject = {
    connected?: number;
}

const connectionObject: ConnectionObject = {};

export async function connectDB() {
    if (connectionObject.connected) {
        console.log("Already connected to the database");
        return;
    }
    try {
        const mongoose = await import('mongoose');
        const connection = await mongoose.connect(process.env.MONGO_URI as string);
        connectionObject.connected = connection.connections[0].readyState;
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error connecting to the database");
        console.log(error);
        throw error;
    }
}