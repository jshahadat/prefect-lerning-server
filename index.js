const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/category.json')
const topic = require('./data/topic.json');



app.get('/', (req, res) => {
    res.send('API Running');
});


app.get('/coures-category', (req, res) => {
    res.send(category)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(topic);
    }
    else {
        const category_topic = topic.filter(n => n.category_id === id);
        res.send(category_topic);
    }
})

app.get('/topic', (req, res) => {
    res.send(topic);
});

app.get('/topic/:id', (req, res) => {
    const id = req.params.id;
    const selectedTopic = topic.find(n => n._id === id);
    res.send(selectedTopic);
});

app.listen(port, () => {
    console.log('Assignment ten Server running on port', port);
})