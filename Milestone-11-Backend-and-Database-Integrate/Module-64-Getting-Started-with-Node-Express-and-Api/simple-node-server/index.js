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
];


// username: dbuser1
// password: QufBE@8RvPktwsu

const uri = "mongodb+srv://dbuser1:QufBE@8RvPktwsu@cluster0.fo4a3mc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("SimpleNode").collection("users");
    // perform actions on the collection object
    console.log('Database Connected');
    client.close();
});


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

app.post('/users', (req, res) => {
    console.log('POST API Called');
    // console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})