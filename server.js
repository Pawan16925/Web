const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const userExists = users.some(u => u.username === username || u.email === email);
    if (userExists) {
        res.json({ success: false, message: 'Username or email already exists' });
    } else {
        users.push({ username, email, password });
        res.json({ success: true });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
