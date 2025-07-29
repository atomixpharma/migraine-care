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
    const existingUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { phone, dob, address, city, province, postalCode },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating demographics:", error);
    res.status(500).json({ error: "Failed to update user demographics" });
  }
}
