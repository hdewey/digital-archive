import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filename } = req.query;

  if (typeof filename === typeof 'String!') {

    // Get the image file path
    const imagePath = path.join(process.cwd(), 'assets/projects', filename as string);
    
    // Check if the file exists
    if (!fs.existsSync(imagePath)) {
      res.status(404).json({ error: 'Image not found' });
      return;
    }
    const fileBuffer = fs.readFileSync(imagePath);
    res.setHeader('Content-Type', 'image/jpeg'); 
    res.status(200).send(fileBuffer);
  } else {
    res.status(404).json({ error: 'No image specified.' });
    return;
  }
}