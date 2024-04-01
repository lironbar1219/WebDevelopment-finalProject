const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;
require('dotenv').config();


app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; 

app.post('/api/questions', async (req, res) => {
    try {
        // 3.5 model
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": req.body.question}
            ],
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        });

        res.json({ answer: response.data.choices[0].message.content });
    } catch (error) {
        console.error('Error calling OpenAI API', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
