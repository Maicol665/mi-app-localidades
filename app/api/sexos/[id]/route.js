import { NextResponse } from 'next/server';
import SexoModel from '../../../../models/sexoModel';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { sexo } = await request.json();
    await SexoModel.update(id, sexo);
    return NextResponse.json({ message: 'Actualizado con éxito' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
