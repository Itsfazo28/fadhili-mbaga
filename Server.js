const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const users = {
    user: 'password'
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] === password) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});