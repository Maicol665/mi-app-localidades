import { NextResponse } from 'next/server';
import GrupoSisbenModel from '../../../models/grupoSisbenModel';

export async function GET() {
  try {
    const data = await GrupoSisbenModel.getAll();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
