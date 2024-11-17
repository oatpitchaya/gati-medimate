import mongoose from 'mongoose';

const dbURI = 'mongodb://admin:admin@localhost:27017/?authMechanism=DEFAULT';

const connect = async () => {
    if (mongoose.connection.readyState >= 1) return;
    return mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default connect;
