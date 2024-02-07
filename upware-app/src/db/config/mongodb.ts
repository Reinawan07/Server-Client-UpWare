
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// let db;
// async function connect() {
//     try {
//         const database = client.db('Ch2');
//         db = database;
//         return database;
//     } catch (error) {
//         console.log(error);
//     }
// }

export const database = client.db('P3Ch2');