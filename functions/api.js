import express from 'express';
import ServerlessHttp from 'serverless-http'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('App is running...');
})

app.use('/api/', router);

const handler = ServerlessHttp(app);

module.exports.handler = async(event, content) => {
    const result = await handler(event, content);
    return result;
};
