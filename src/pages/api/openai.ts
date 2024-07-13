// pages/api/openai.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import OpenAI from 'openai';

const openai = new OpenAI();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error('Missing OpenAI API key');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'Answer questions as concise as possible' },
        { role: 'user', content: message }
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 300,
    });
  
    const chatContent = completion.choices[0].message.content ?? "";

    const mp3Response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'alloy',
      input: chatContent,
    });

    const buffer = Buffer.from(await mp3Response.arrayBuffer());
    const audioUrl = `data:audio/mpeg;base64,${buffer.toString('base64')}`;

    // const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    //   model: 'gpt-3.5-turbo',
    //   messages: [
    //     { role: 'system', content: 'Answer questions as concise as possible' },
    //     { role: 'user', content: message }
    //   ],
    //   max_tokens: 300,
    // }, {
    //   headers: {
    //     'Authorization': `Bearer ${openaiApiKey}`,
    //     'Content-Type': 'application/json',
    //   },
    // });

    // const openaiResponse = response.data.choices[0].message.content

    res.status(200).json({ chatContent, audioUrl });
  } catch (error) {
    console.error('Error fetching OpenAI response:', error);
    res.status(500).json({ error });
  }
}
