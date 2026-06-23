import { NextResponse } from 'next/server';
import DiscapacidadModel from '../../../../models/discapacidadModel';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { discapacidad } = await request.json();
    await DiscapacidadModel.update(id, discapacidad);
    return NextResponse.json({ message: 'Actualizada con éxito' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
