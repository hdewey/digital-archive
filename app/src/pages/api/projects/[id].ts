import type { NextApiRequest, NextApiResponse } from 'next';
import { getProjectById } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const project = await getProjectById(Number(id));
        if (project) {
          res.status(200).json(project);
        } else {
          res.status(404).json({ message: 'Project not found' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}