import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';
import { getAssetsByProjectId, createAsset, updateAsset, deleteAsset } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req;

  switch (method) {
    case 'GET':
      try {
        const { id } = query;
        const assets = await getAssetsByProjectId(parseInt(id as string));
        res.status(200).json(assets);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting assets' });
      }
      break;

    case 'POST':
      try {
        const { projectId, type, increment, data } = body;
        const asset = await createAsset(projectId, type, increment, data);
        res.status(201).json(asset);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating asset' });
      }
      break;

    case 'PUT':
      try {
        const { assetId, projectId, type, increment, data } = body;
        const asset = await updateAsset(assetId, projectId, type, increment, data);
        res.status(200).json(asset);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating asset' });
      }
      break;

    case 'DELETE':
      try {
        const assetId = Number(query.assetId);
        const asset = await deleteAsset(assetId);
        res.status(200).json(asset);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting asset' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}