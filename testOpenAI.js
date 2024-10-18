const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config(); // Load .env variables

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function testOpenAI() {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Write a short script for a sci-fi scene.',
      max_tokens: 100,
    });
    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error('Error:', error);
  }
}

testOpenAI();
