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

// A. Return all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// B. Filter users by age
app.get('/api/users/filter', (req, res) => {

    console.log(req.query);

    const { minAge, maxAge } = req.query;
    let sortedUsers = [...users];

    if (minAge) {
        sortedUsers = sortedUsers.filter(user => {
            return user.age >= Number(minAge);
        });
    }

    if (maxAge) {
        sortedUsers = sortedUsers.filter(user => {
            return user.age <= Number(maxAge);
        });
    }

    return res.json(sortedUsers);
});

// C. Find a specific user by ID
app.get('/api/users/:id', (req, res) => {

    const { id } = req.params;

    const user1 = users.find(user => {
        return user.id === Number(id);
    });

    if (!user1) {
        return res.status(404).send('User Does Not Exist');
    }

    return res.json(user1);
});

// D. Display user details in HTML
app.get('/user/:id', (req, res) => {

    const { id } = req.params;

    const user1 = users.find(user => {
        return user.id === Number(id);
    });

    if (!user1) {
        return res.status(404).send('User Does Not Exist');
    }

    return res.send(`
        <html>
            <head>
                <title>User Details</title>
            </head>
            <body>
                <h1>${user1.name}</h1>
                <p>ID: ${user1.id}</p>
                <p>Email: ${user1.email}</p>
                <p>Age: ${user1.age}</p>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});