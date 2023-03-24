import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const projects = await getAllProjects();
        res.status(200).json(projects);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'POST':
      try {
        const { name, description, teamBio, profilePicture } = req.body;
        const project = await createProject(name, description, teamBio, profilePicture);
        res.status(201).json(project);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'PUT':
      try {
        const { id, name, description, teamBio, profilePicture } = req.body;
        const project = await updateProject(id, name, description, teamBio, profilePicture);
        res.status(200).json(project);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        const project = await deleteProject(id);
        res.status(200).json(project);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}