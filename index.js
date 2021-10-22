const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('learning and earning second node server nnpm node mon')
});
const users = [
    { id: 0, name: 'sabana', email: 'sabana@',phone:'018346463' },
    { id: 1, name: 'sabnur', email: 'sabnur@' },
    { id: 1, name: 'sabnur', email: 'sabnur@' },
    { id: 1, name: 'sabnur', email: 'sabnur@' },
    { id: 1, name: 'sabnur', email: 'sabnur@' },
    { id: 1, name: 'sabnur', email: 'sabnur@' },
    { id: 2, name: 'susmita', email: 'susmita@' }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {

        const searchResult = users.filter(user => user.email.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else {
        res.send(users)
    }
    console.log(req.query.search);
    res.send(users)
})
//app method
app.post('/users', (req, res) => {
    console.log('hitting the post',req.body);
    res.send('inside post')
})
//dynamic api
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);

})
const sports = [
    {id:1,name:'football',orgin:'usa'},
    {id:2,name:'boliball',orgin:'usa'},
    {id:3,name:'crickball',orgin:'usa'},
    {id:4,name:'football',orgin:'usa'},
    {id:5,name:'football',orgin:'usa'},
]
app.get('/sports', (req, res) => {
    res.send(sports);
})
app.get('/sports/:id', (req, res) => {
    const index = req.params.id;
    const singleSports = sports[index];
    res.send(singleSports)
    
})
app.listen(port, () => {
    console.log('listing to ', port);
})