const { MongoClient, ObjectID } = require('mongodb');

const config = { useNewUrlParser: true };

MongoClient.connect('mongodb://localhost:27017/TodoApp', config, (conErr, client) => {
    if (conErr) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // // Delete many
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // Delete one
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // findOneandDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5bdab7369c7b691b882afc66') }).then((results) => {
        console.log(JSON.stringify(results, undefined, 4));
    });

    // client.close();
});
