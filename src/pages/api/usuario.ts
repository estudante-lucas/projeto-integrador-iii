import { salvar } from '@/services/UsuarioService'
import { UsuarioType } from '@/types/UsuarioType'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ValidationError } from 'sequelize'
import Validation from './exception/Validation'

export default async function handler(req: NextApiRequest, res: NextApiResponse<UsuarioType | Validation[]>) {
  if (req.method === 'POST') {
    await salvar(req.body)
      .then(usuario => res.status(201).json(usuario))
      .catch((error: ValidationError) => res.status(404).json(error.errors.map(e => new Validation(e.message))))
  }
  res.status(400).end()
}