const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017';


// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function createDatabaseAndInsertData() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Create a new database (it will be created if it doesn't exist)
    const db = client.db(dbName);

    // Insert data into a collection (it will be created if it doesn't exist)
    const collection = db.collection('mycollection');
    await collection.insertOne({ name: 'John Doe', age: 30 });

    console.log('Data inserted successfully');
  } finally {
    // Close the connection when done
    await client.close();
  }
}

// Call the function to create the database and insert data
createDatabaseAndInsertData();
