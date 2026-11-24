/*
Majdi Yassin
Tarik Badrea
Muhamad Zubedat
*/

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const users = require('./users.json');

const userTemplate = fs.readFileSync(
    path.join(__dirname, 'templates', 'user.html'),
    'utf8'
);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/filter', (req, res) => {
    const min = req.query.minAge ? Number(req.query.minAge) : 0;
    const max = req.query.maxAge ? Number(req.query.maxAge) : Infinity;

    if (Number.isNaN(min) || Number.isNaN(max)) {
        return res.status(400).send('Age must be a number');
    }

    if (min > max) {
        return res.status(400).send('Invalid age range');
    }

    const sortedUsers = users.filter(user => {
        return user.age >= min && user.age <= max;
    });

    res.json(sortedUsers);
});

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find(u => u.id === Number(id));

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.json(user);
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find(u => u.id === Number(id));

    if (!user) {
        return res.status(404).send('User not found');
    }

    const html = userTemplate
        .replaceAll('{{id}}', user.id)
        .replaceAll('{{name}}', user.name)
        .replaceAll('{{email}}', user.email)
        .replaceAll('{{age}}', user.age);

    res.send(html);
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});