import { NextResponse } from 'next/server';
import NucleoModel from '../../../models/nucleoModel';

export async function GET() {
  try {
    const data = await NucleoModel.getAll();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { nombre_nucleo } = await request.json();
    await NucleoModel.create(nombre_nucleo);
    return NextResponse.json({ message: 'Creado con éxito' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
