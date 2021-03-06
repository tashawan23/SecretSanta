const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error: "));

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');
const wishlistsRouter = require('./routes/wishlists');

app.use('/events', eventsRouter);
app.use('/users', usersRouter);
app.use('/wishlists', wishlistsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
