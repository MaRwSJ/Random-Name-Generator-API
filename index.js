const express = require('express');
const app = express();
const PORT = 3000;

// Predefined list of names
const names = [
    "Marwa",
    "Elon",
    "Maria",
    "Helan",
    "PickleBall",
    "Milton",
    "Catrina",
    "Cat",
    "Jade",
    "Tori"
];

// Create endpoint to get a random name from list above
app.get('/name', (req, res) => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    res.json({ name: randomName });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
