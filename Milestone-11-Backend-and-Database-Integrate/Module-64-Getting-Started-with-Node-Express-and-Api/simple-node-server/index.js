const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

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
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})