import QuadroLista from '@/components/quadro/QuadroLista';
import { get } from '@/services/FecthService';
import type QuadroType from '@/types/QuadroType';
import BotaoAdicionar from '@components/BotaoAdicionar';
import { useRouter } from 'next/router';

interface QuadroProps {
  quadros: QuadroType[] | null
}

export default function Quadro({ quadros }: QuadroProps) {
  const router = useRouter()

  const handleAdicionar = () => {
    router.push('/cadastros/quadro/adicionar')
  }

  return (
    <div>
      <BotaoAdicionar onClick={handleAdicionar} />
      <QuadroLista quadros={quadros} />
    </div>
  )
}

export async function getServerSideProps() {
  const quadros: QuadroType[] = await get("quadros");
  return {
    props: {
      quadros: quadros?.map(quadro => JSON.parse(JSON.stringify(quadro))) || null
    },
  };
}

