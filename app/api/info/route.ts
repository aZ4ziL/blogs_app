import { NextResponse } from "next/server";

const data = {
  title: "Hi, I'am Fajri Fath",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci explicabo consectetur laborum magnam. Velit corrupti molestias est a odio!",
};

export function GET() {
  return NextResponse.json(data);
}
