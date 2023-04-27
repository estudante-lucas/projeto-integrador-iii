import { UsuarioType } from '@/types/UsuarioType';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

interface UsuarioListaProps {
    usuarios: UsuarioType[] | null
}

const UsuarioLista = ({ usuarios }: UsuarioListaProps) => {
  return (
    <div>
      <h1>Lista de Usuários</h1>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios?.map((usuario) => (
            <TableRow key={usuario.id}>
              <TableCell>{usuario.nome}</TableCell>
              <TableCell>{usuario.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsuarioLista