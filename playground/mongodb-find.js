const { MongoClient, ObjectID } = require('mongodb');

const config = { useNewUrlParser: true };

MongoClient.connect('mongodb://localhost:27017/TodoApp', config, (conErr, client) => {
    if (conErr) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bdab5d9c2d99326e40acd37'),
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({ name: 'Andy' }).toArray().then((users) => {
        console.log('Users that match Andy');
        console.log(JSON.stringify(users, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //client.close();
});
