import type { NextApiRequest, NextApiResponse } from "next";
import { Info, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  message: string;
  data?: Info[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const requestMethod = req.method;
  if (requestMethod === "GET") {
    const infos = await prisma.info.findMany();
    return res.status(200).json({ data: infos, message: "Success" });
  }
  if (requestMethod === "POST") {
    const body = JSON.parse(req.body);
    const data = await prisma.info.create({ data: body });
    return res.status(200).json({ message: "Post created successfully" });
  }

  if (requestMethod === "PUT") {
    const body = JSON.parse(req.body);
    const id = body.id;
    const form = body.formData;
    const update = await prisma.info.update({
      where: { id: id },
      data: { ...form },
    });
    const updated = await prisma.info.findMany();
    return res.status(200).json({ data: updated, message: "Success" });
  }
}
