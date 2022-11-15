const express = require('express');
const app = express();
var cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const users = [
    { id: 1, name: 'Maa', email: 'maa@gmail.com' },
    { id: 2, name: 'Sazzad', email: 'sazzad@gmail.com' },
    { id: 3, name: 'Marjia', email: 'marjia@gmail.com' },
    { id: 4, name: 'Adib', email: 'adib@gmail.com' },
    { id: 5, name: 'Adiba', email: 'adiba@gmail.com' },
]
// username: dbuser1
// password: QufBE78RvPktwsu
const uri = "mongodb+srv://dbuser1:QufBE78RvPktwsu@cluster0.btulx9e.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const collectionUsers = client.db('simpleNode').collection('users');
        const user = { name: 'Adib Bin Sazzad', email: 'adibbinsazzad@gmail.com', designation: 'Islamic Scholar' }
        // const result = await collectionUsers.insertOne(user);
        // console.log(result);
        app.post('/users', async (req, res) => {
            const user = req.body;
            user.id = users.length + 1;
            const result = await collectionUsers.insertOne(user)
            console.log(result)
            res.send(user)
        });
    }
    finally {

    }
}
run().catch(err => console.log(err))
app.get('/users', (req, res) => {
    // console.log(req.query)
    if (req.query.name) {
        const search = req.query.name;
        const filtered = users.filter(usr => usr.name.toLowerCase().indexOf(search) >= 0);
        res.send(filtered);
        // Filters users by query
    } else {
        res.send(users)
    }
});

// app.post('/users', (req, res) => {
//     console.log('POST API Called');
//     // console.log(req.body);
//     const user = req.body;
//     user.id = users.length + 1;
//     users.push(user);
//     res.send(user)
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})