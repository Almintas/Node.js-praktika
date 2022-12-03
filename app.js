const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.json());

const cars = {
    bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
    mb: ["A class", "C class", "E class", "S class"],
    vw: ["Golf", "Arteon", "UP"]
};

app.get('/api/cars/:brand', (req, res) => {
    const brand = req.params.brand;
    res.send(brand);
})


app.listen(PORT, () => console.log(`App is running on port  ${PORT}`));