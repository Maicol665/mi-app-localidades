import { NextResponse } from 'next/server';
import SectorZonaModel from '../../../models/sectorZonaModel';

export async function GET() {
  try {
    const data = await SectorZonaModel.getAll();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
