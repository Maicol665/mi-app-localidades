import { NextResponse } from 'next/server';
import GrupoSisbenModel from '../../../../models/grupoSisbenModel';

export async function DELETE(_request, { params }) {
  try {
    const { id } = params;
    await GrupoSisbenModel.delete(id);
    return NextResponse.json({ message: 'Eliminado con éxito' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
