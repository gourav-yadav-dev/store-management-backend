const express = require('express')
const app = express();
const userRouter = require('./routers/users.route')
app.use(express.json())
app.use('/test', userRouter);
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;