import express from 'express';
import routes from './routes'

const app = express();

app.use(routes);

app.listen(5000, () => {
    console.log('server started on port 5000');
});