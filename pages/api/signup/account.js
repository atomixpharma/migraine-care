import { prisma } from "@/lib/prisma";


export default async function handler(req, res) {
  console.log('Received request:', req.method, req.body);
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    console.log('User created:', user);
    res.status(200).json(user);
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'User creation failed.' });
  }
}
