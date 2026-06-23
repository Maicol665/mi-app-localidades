import { NextResponse } from 'next/server';
import GrupoEtnicoModel from '../../../models/grupoEtnicoModel';

export async function GET() {
  try {
    const data = await GrupoEtnicoModel.getAll();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { grupo_etnico } = await request.json();
    await GrupoEtnicoModel.create(grupo_etnico);
    return NextResponse.json({ message: 'Creado con éxito' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
