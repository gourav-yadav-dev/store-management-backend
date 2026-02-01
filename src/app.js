import express from 'express';
import userRoutes from './routers/users.route.js';

const app = express();

app.use(express.json());
app.use('/api/user', userRoutes);

export default app;
