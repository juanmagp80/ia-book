// src/app/api/generate-story/route.js
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { edad, tema } = await request.json();

    if (!edad || !tema) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: `Escribe un cuento para niños de ${edad} años sobre: ${tema}. 
                  Debe tener 3 párrafos máximo, lenguaje sencillo y ser en español.`
      }],
      temperature: 0.7,
      max_tokens: 500
    });

    return NextResponse.json({
      cuento: completion.choices[0].message.content
    });

  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json(
      { error: "Error al generar el cuento" },
      { status: 500 }
    );
  }
}