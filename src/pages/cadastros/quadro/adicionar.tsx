import QuadroAdicionar from '@/components/quadro/QuadroAdicionar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

function AdicionarQuadro() {
    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (
        <div>
            <Button onClick={handleBack}>
                <ArrowBackIcon />
                Voltar
            </Button>
            <QuadroAdicionar onSucess={handleBack} />
        </div>
    )
}

export default AdicionarQuadro