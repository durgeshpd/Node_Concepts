const { MongoClient } = require("mongodb");

const url = "mongodb+srv://<username>:<password>cluster0.dktzov8.mongodb.net/";

const client = new MongoClient(url);

// Database Name
const dbName = 'MyAppDB';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');

    const updateResult = await collection.updateOne(
        { email: "durgeskp@egmail.com" },       
        { $set: { country: "India" } }       
      );

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());