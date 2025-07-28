import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    name,
    email,
    phone,
    insurance,
    symptoms,
    duration,
    severity,
  } = req.body;

  try {
    // Step 1: create the User
    const newUser = await prisma.user.create({
      data: { name, email, phone },
    });

    // Step 2: create IntakeForm linked to User
    const intakeForm = await prisma.intakeForm.create({
      data: {
        userId: newUser.id,
        fullName: name,
        insurance,
        symptoms: Array.isArray(symptoms) ? symptoms.join(', ') : symptoms,
        duration,
        severity,
      },
    });

    res.status(200).json({ user: newUser, intakeForm });
  } catch (error) {
    console.error('Error saving intake form:', error);
    res.status(500).json({ message: 'Failed to save intake data' });
  }
}
