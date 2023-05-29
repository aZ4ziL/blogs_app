import { NextResponse } from "next/server";

const data = {
  title: "Hay, Saya Fajri Fath",
  description:
    "Saya adalah seorang full-stack developer yang menyukai dunia pemrograman karena hobi.",
};

export function GET() {
  return NextResponse.json(data);
}
