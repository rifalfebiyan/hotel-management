const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/saveGuests', (req, res) => {
    const guests = req.body.guests;
    fs.writeFile(path.join(__dirname, 'guests.json'), JSON.stringify(guests), (err) => {
        if (err) {
            console.error('Error saving guests:', err);
            res.status(500).send('Error saving guests');
        } else {
            res.send('Guests saved successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
