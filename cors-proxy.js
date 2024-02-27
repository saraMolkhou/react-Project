import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Allow preflight requests to proceed
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    next();
});

app.use(express.json());

app.use('/proxy', async (req, res) => {
    try {
        const url = req.query.url;
        const response = await fetch(url, { method: req.method });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`CORS Proxy Server is running at http://localhost:${port}`);
});
