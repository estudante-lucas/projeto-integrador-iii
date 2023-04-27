import UsuarioAdicionar from '@/components/usuarios/UsuarioAdicionar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

function AdicionarUsuario() {
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
            <UsuarioAdicionar onSucess={handleBack} />
        </div>
    )
}

export default AdicionarUsuario