import express from 'express';
import userRoutes from './routers/users.route.js';
import categoryRoutes from './routers/categories.route.js'

const app = express();

app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/user', categoryRoutes)

export default app;
