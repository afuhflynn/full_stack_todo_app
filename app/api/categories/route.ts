import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CreateCategoryPayload } from "@/types";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

/**
 * =================================
 * GET /api/categories
 *
 * Fetches all categories from the database.
 * =================================
 */
export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });
  }
  try {
    const categories = await prisma.category.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 },
    );
  }
}

/**
 * =================================
 * POST /api/categories
 *
 * Creates a new category.
 * =================================
 */
export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });
  }
  try {
    // Note: In a real app, you'd get the userId from the session.
    // For now, we'll assume it's passed in the body for simplicity.
    const { name, userId }: CreateCategoryPayload & { userId: string } =
      await request.json();

    if (!name || !userId) {
      return NextResponse.json(
        { error: "Name and userId are required fields" },
        { status: 400 },
      );
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Failed to create category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 },
    );
  }
}
