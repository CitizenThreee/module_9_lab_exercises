const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes');
let postRoutes = require('./routes/postRoutes')

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});