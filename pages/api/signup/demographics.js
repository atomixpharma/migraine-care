import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/authOptions";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.email) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { phone, dob, address, city, province, postalCode } = req.body;

  try {
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: { phone, dob, address, city, province, postalCode },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user demographics" });
  }
}

