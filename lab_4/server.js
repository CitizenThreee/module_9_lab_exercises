const express = require("express");
cors = require('cors')
const app = express();
let emojiRoutes = require('./routes/emojiRoutes');

app.use(cors());

app.use(express.json());
app.use('/api/emoji', emojiRoutes);

// set port, listen for requests
const PORT = 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});