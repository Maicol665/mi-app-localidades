import { NextResponse } from 'next/server';
import SexoModel from '../../../models/sexoModel';

export async function GET() {
  try {
    const data = await SexoModel.getAll();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
