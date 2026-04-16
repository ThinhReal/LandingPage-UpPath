import { NextResponse } from "next/server";
import { getDbName, getMongoClient } from "@/lib/mongodb";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  const email = (body as { email?: unknown }).email;
  const source =
    typeof (body as { source?: unknown }).source === "string"
      ? (body as { source: string }).source.slice(0, 120)
      : undefined;

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();

  try {
    const client = await getMongoClient();
    const db = client.db(getDbName());
    const collection = db.collection("waitlist");

    const existing = await collection.findOne({ email: normalized });
    if (existing) {
      return NextResponse.json(
        { error: "Email này đã được đăng ký trước đó." },
        { status: 409 },
      );
    }

    const result = await collection.insertOne({
      email: normalized,
      source: source ?? "waitlist_modal",
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true, id: result.insertedId.toString() });
  } catch (e: unknown) {
    console.error("waitlist insert error", e);
    return NextResponse.json({ error: "Không thể lưu. Thử lại sau." }, { status: 500 });
  }
}
