const { MongoClient, ObjectID } = require('mongodb');

const config = { useNewUrlParser: true };

MongoClient.connect('mongodb://localhost:27017/TodoApp', config, (conErr, client) => {
    if (conErr) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false,
    // }, (collErr, result) => {
    //     if (collErr) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Andy',
    //     age: 23,
    //     location: 'Brisbane',
    // }, (collErr, result) => {
    //     if (collErr) {
    //         return console.log('Unable to insert user', collErr);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

    client.close();
});
