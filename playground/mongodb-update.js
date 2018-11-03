const { MongoClient, ObjectID } = require('mongodb');

const config = { useNewUrlParser: true };

MongoClient.connect('mongodb://localhost:27017/TodoApp', config, (conErr, client) => {
    if (conErr) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bdab7f20d74880a3493231e'),
    }, {
        $set: {
            name: 'John',
        },
        $inc: {
            age: 1,
        },
    }, {
        returnOriginal: false,
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 4));
    });

    // client.close();
});
