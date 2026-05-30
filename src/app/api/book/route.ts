import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, package: pkg, date, time, paymentMethod } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const dataDir = path.resolve(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

    const file = path.join(dataDir, 'bookings.json');
    let bookings = [];
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf8');
      try { bookings = JSON.parse(raw || '[]'); } catch { bookings = []; }
    }

    const id = `BK_${Date.now()}`;
    const record = { id, name, email, phone, package: pkg, date, time, paymentMethod, status: 'pending', createdAt: new Date().toISOString() };
    bookings.push(record);
    fs.writeFileSync(file, JSON.stringify(bookings, null, 2), 'utf8');

    return NextResponse.json({ id, message: 'Booking saved. Please complete payment via bank transfer or contact us for card payment.' });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
