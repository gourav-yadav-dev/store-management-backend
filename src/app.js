import express from 'express';
import userRoutes from './routers/users.route.js';
import categoryRoutes from './routers/categories.route.js'
import productRoutes from './routers/products.route.js'
import companyrouter from './routers/companies.route.js'

const app = express();

app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/user', categoryRoutes)
app.use('/api/user', productRoutes)
app.use('/api/user', companyrouter)


export default app;
