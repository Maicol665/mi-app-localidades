import { NextResponse } from 'next/server';
import LocalidadModel from '../../../models/localidadModel';

export async function GET() {
  try {
    const localidades = await LocalidadModel.getAll();
    return NextResponse.json(localidades);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('POST body:', body);
    const { codloc, localidad } = body;
    await LocalidadModel.create(codloc, localidad);
    return NextResponse.json({ message: 'Localidad creada con exito' }, { status: 201 });
  } catch (error) {
    console.error('POST error completo:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
