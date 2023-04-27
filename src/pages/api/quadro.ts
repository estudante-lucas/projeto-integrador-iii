import { salvar } from '@/services/QuadroService'
import QuadroType from '@/types/QuadroType'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ValidationError } from 'sequelize'

export default async function handler(req: NextApiRequest, res: NextApiResponse<QuadroType | ValidationError>) {
  if (req.method === 'POST') {
    await salvar(req.body)
      .then(quadro => res.status(201).json(quadro))
      .catch((error: ValidationError) => {
        res.status(500).json(error)
      })
  }
  res.status(400).end()
}