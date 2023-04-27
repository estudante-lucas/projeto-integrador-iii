import QuadroType from '@/types/QuadroType'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

interface QuadroListaProps {
    quadros: QuadroType[] | null
}

const QuadroLista = ({quadros}: QuadroListaProps) => {
  return (
    <div>
    <h1>Lista de Quadros</h1>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nome</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {quadros?.map((quadro) => (
          <TableRow key={quadro.id}>
            <TableCell>{quadro.nome}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default QuadroLista