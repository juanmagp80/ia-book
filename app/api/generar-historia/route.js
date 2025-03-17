import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  const { edad, tema } = await request.json();

  const prompt = `Escribe una historia para un niño de ${edad} años sobre ${tema}.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    });

    const historia = completion.choices[0].message.content;
    return NextResponse.json({ historia });
  } catch (error) {
    return NextResponse.json({ error: 'Error al generar la historia' }, { status: 500 });
  }
}