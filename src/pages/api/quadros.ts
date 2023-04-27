import { encontrarTodos } from '@/services/QuadroService';
import QuadroType from '@/types/QuadroType';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<QuadroType[]>) {
  if (req.method === 'GET') {
    await encontrarTodos()
      .then(quadros => res.status(200).json(quadros))
      .catch((error) => {
        res.status(500).end()
      })
  }
  res.status(400).end()
}