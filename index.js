const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello myadd dfg fdrg kkkk ');
});

const users = [
    { id: 1, name: 'sabana mam', email: 'sdadfas@gmatryyturt6uyruil.com', phone: '017938945' },
    { id: 2, name: 'sabnur  mam', email: 'sdadfas@gmail.com', phone: '017938945' },
    { id: 3, name: 'sabrina mam', email: 'sdadfas@gmail.com', phone: '017938945' },
    { id: 4, name: 'sahana mam', email: 'sdadfas@gmail.com', phone: '017938945' }
]

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:Id', (req, res) => {
    console.log(req.params);
    const paramId = req.params.Id;
    const user = users.find(user=> user.id == paramId);
    res.send(user)
})

app.listen(port, () => {
    console.log('lisiting to port', port)
})