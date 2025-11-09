import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { content, userId } = req.body;
    const todo = await prisma.todo.create({
      data: {
        content,
        userId,
      },
    });
    res.status(201).json(todo);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
