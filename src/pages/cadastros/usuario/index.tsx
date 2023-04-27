import UsuarioLista from '@/components/usuarios/UsuarioLista';
import { get } from '@/services/FecthService';
import { SnackBarType } from '@/types/SnackBarType';
import type { UsuarioType } from '@/types/UsuarioType';
import BotaoAdicionar from '@components/BotaoAdicionar';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface UsuarioProps {
  usuarios: UsuarioType[] | null
}

export default function Usuario({ usuarios }: UsuarioProps) {
  const router = useRouter()
  const [usuariosLocal, setUsuariosLocal] = useState(usuarios)

  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('')
  const [alertColor, setAlertColor] = useState<AlertColor>('info')

  const handleNotificacao = (snackBar: SnackBarType) => {
    setMostrarNotificacao(true)
    setMensagemErro(snackBar.mensagem)
    setAlertColor(snackBar.alertColor)
  }

  const handleClose = () => {
    setMostrarNotificacao(false);
  }

  const handleAdicionar = () => {
    router.push('/cadastros/usuario/adicionar')
  }

  return (
    <div>
      <BotaoAdicionar onClick={handleAdicionar} />
      <UsuarioLista usuarios={usuarios} />
      <Snackbar open={mostrarNotificacao} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertColor}>
          {mensagemErro}
        </Alert>
      </Snackbar>
    </div>
  )
}

export async function getServerSideProps() {
  const usuarios: UsuarioType[] = await get("usuarios");
  return {
    props: {
      usuarios: usuarios?.map(usuario => JSON.parse(JSON.stringify(usuario))) || null
    },
  };
}

