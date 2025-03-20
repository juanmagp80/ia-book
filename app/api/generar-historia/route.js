import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  const { edad, tema } = await request.json();

  // Definir la cantidad de palabras según la edad
  let palabras = 300; // Valor por defecto
  if (edad >= 0 && edad <= 3) palabras = 300;
  else if (edad >= 4 && edad <= 6) palabras = 800;
  else if (edad >= 7 && edad <= 9) palabras = 3000;
  else if (edad >= 10 && edad <= 12) palabras = 10000;

  const prompt = `Escribe un cuento para niños de aproximadamente ${palabras} palabras para ${edad} años sobre ${tema}. Debe tener un principio, desarrollo y final, y estar escrito en español con un lenguaje claro y adecuado para la edad indicada.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: Math.min(palabras * 2, 4096), // Ajuste de tokens
    });

    const cuento = completion.choices[0].message.content;
    return NextResponse.json({ cuento });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error al generar el cuento' }, { status: 500 });
  }
}

