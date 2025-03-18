import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  const { edad, tema } = await request.json();

  const prompt = `Escribe un capítulo de un cuento para niños de ${edad} años sobre ${tema}. El capítulo debe tener un principio, desarrollo y final, y debe estar escrito completamente en español. Usa un lenguaje claro y adecuado para niños.`;

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/gpt2', // Modelo de ejemplo (puedes cambiarlo)
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        },
      }
    );

    const cuento = response.data[0].generated_text;
    return NextResponse.json({ cuento });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error al generar el cuento' }, { status: 500 });
  }
}