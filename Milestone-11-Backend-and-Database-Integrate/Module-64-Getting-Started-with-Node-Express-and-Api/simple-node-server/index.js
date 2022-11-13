const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000

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

app.get('/users', (req, res) => {
    res.send(users)
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