const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');
const db = require('./db');

app.use(express.json());
app.use('/users', userRoutes);

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
  });
});
