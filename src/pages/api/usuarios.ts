import { encontrarTodos } from '@/services/UsuarioService'
import { UsuarioType } from '@/types/UsuarioType'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<UsuarioType[]>) {
  if (req.method === 'GET') {
    await encontrarTodos()
      .then(usuarios => res.status(200).json(usuarios))
      .catch(() => res.status(500).end())
  }
  res.status(400).end()
}