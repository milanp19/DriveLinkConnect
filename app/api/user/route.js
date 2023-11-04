import prisma from "@/utills/prismaClient";
import { NextResponse } from "next/server";

export async function POST() {
  const newUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });

  return NextResponse.json(newUser);
}

export async function GET(request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
