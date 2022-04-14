const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://dswa5:dswa5@cluster0.bpnnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

const dbName = 'ifsp';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(ifsp);
  const collection = db.collection('contatos');

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
