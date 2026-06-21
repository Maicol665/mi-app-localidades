// app/api/localidades/[id]/route.js
import { NextResponse } from 'next/server';
import LocalidadModel from '../../../../models/localidadModel';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { codloc, localidad } = await request.json();
    await LocalidadModel.update(id, codloc, localidad);
    return NextResponse.json({ message: 'Actualizada con exito' });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await LocalidadModel.delete(id);
    return NextResponse.json({ message: 'Borrada con exito' });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}