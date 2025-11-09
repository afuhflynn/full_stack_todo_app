import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const todo = await prisma.todo.findUnique({
      where: { id: String(id) },
    });
    res.status(200).json(todo);
  } else if (req.method === "PUT") {
    const { content, completed } = req.body;
    const todo = await prisma.todo.update({
      where: { id: String(id) },
      data: {
        content,
        completed,
      },
    });
    res.status(200).json(todo);
  } else if (req.method === "DELETE") {
    await prisma.todo.delete({
      where: { id: String(id) },
    });
    res.status(204).end();
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
