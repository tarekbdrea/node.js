/*
Majdi Yassin
Tarik Badrea
Muhamad Zubedat
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const users = require('./users.json');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Return all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Filter users by age
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

// Return user by ID
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find(u => u.id === Number(id));

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.json(user);
});

// Display user in HTML
app.get('/user/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find(u => u.id === Number(id));

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.send(`
        <h1>User Details</h1>
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Age: ${user.age}</p>
    `);
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});