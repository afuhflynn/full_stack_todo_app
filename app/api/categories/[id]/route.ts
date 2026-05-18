import { 
  NextResponse 
} from "next/server";

import { 
  DbService
} from "@/server/services/db-service"; 

import { 
  UpdateCategoryPayload 
} from "@/types";

import { 
  headers 
} from "next/headers";

import { 
  auth 
} from "@/lib/auth";

/**
 * =================================
 * GET /api/categories/[id]
 *
 * Fetches a single category by its ID.
 * =================================
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });
  }
  try {
    const { id } = await params;

    const dbService = new DbService(); 
    const client = await dbService.getDatabase(); 

    const category = await client.category.findUnique({
      where: { id },
    });

    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("Failed to fetch category:", error);
    return NextResponse.json(
      { error: "Failed to fetch category" },
      { status: 500 },
    );
  }
}

/**
 * =================================
 * PUT /api/categories/[id]
 *
 * Updates an existing category.
 * =================================
 */
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });
  }
  try {
    const { id } = await params;
    const { name }: UpdateCategoryPayload = await request.json();

    const dbService = new DbService(); 
    const client = await dbService.getDatabase(); 

    const updatedCategory = await client.category.update({
      where: { id },
      data: {
        name,
      },
    });

    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error("Failed to update category:", error);
    return NextResponse.json(
      { error: "Failed to update category" },
      { status: 500 },
    );
  }
}

/**
 * =================================
 * DELETE /api/categories/[id]
 *
 * Deletes a category by its ID.
 * =================================
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });
  }
  try {
    const { id } = await params;
    
    const dbService = new DbService(); 
    
    const client = await dbService.getDatabase();

    await client.category.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 }); // No Content
  } catch (error) {
    console.error("Failed to delete category:", error);
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 },
    );
  }
}
