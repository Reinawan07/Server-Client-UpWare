import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({
	path: __dirname + '/../../../.env.local',
});

const connectionString = process.env.MONGO_URI;

let client: MongoClient;
export const getMongoClientInstance = async () => {
	if (!connectionString) {
		throw new Error('MONGO_URI is not defined');
	}
	if (!client) {
		client = new MongoClient(connectionString);
		await client.connect();
	}
	return client;
};

export const getDB = async () => {
	const client = await getMongoClientInstance();
	const db = client.db("Ch2");
	return db;
};