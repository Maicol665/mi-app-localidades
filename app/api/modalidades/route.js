import { NextResponse } from 'next/server';
import ModalidadModel from '../../../models/modalidadModel';

export async function GET() {
  try {
    const data = await ModalidadModel.getAll();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
