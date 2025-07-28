
import multer from 'multer';
import { prisma } from '../../../lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/authOptions';

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ dest: 'public/uploads/' });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.email) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method '${req.method}' not allowed` });
  }
  try {
    await runMiddleware(req, res, upload.fields([
      { name: 'ohipCard', maxCount: 1 },
      { name: 'insurance1', maxCount: 1 },
      { name: 'insurance1Back', maxCount: 1 },
      { name: 'insurance2', maxCount: 1 },
      { name: 'insurance2Back', maxCount: 1 },
    ]));
    // Find user by email from session
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // You can now use user.id for updating the user with uploaded files
    // For now, just return the user id and uploaded files for confirmation
    res.status(200).json({ files: req.files, userId: user.id });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message });
  }
}
