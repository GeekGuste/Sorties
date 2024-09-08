import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import { apiRouter } from '@/routers/apiRouter';
import log from '@/logger/logger';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Server is running!'));

app.use('/api', apiRouter);


app.listen(port, () => {
    log.info(`App listening on port: ${port}`);
});