import UsuarioLista from '@/components/usuario/UsuarioLista';
import { get } from '@/services/FecthService';
import type { UsuarioType } from '@/types/UsuarioType';
import BotaoAdicionar from '@components/BotaoAdicionar';
import { useRouter } from 'next/router';

interface UsuarioProps {
  usuarios: UsuarioType[] | null
}

export default function Usuario({ usuarios }: UsuarioProps) {
  const router = useRouter()

  const handleAdicionar = () => {
    router.push('/cadastros/usuario/adicionar')
  }

  return (
    <div>
      <BotaoAdicionar onClick={handleAdicionar} />
      <UsuarioLista usuarios={usuarios} />
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

