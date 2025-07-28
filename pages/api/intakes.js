import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const intakes = await prisma.intakeForm.findMany({
      include: {
        user: true,
      },
    });
    res.status(200).json(intakes);
  } catch (error) {
    console.error('Error loading intakes:', error);
    res.status(500).json({ message: 'Failed to load intake data' });
  }
}
