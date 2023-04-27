import { post } from '@/services/FecthService';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

interface QuadroAdicionarProps {
    onSucess: () => void
}

const QuadroAdicionar = ({onSucess}: QuadroAdicionarProps) => {
    const [nome, setNome] = useState('');

    const handleNome = (e: any) => {
        setNome(e.target.value);
    };

    const onAdicionarQuadro = async () => {
        post("quadro", {
            nome
        }).then(async (quadro) => {
            onSucess()
        })
    }

    const limparCampos = () => {
        setNome('');
    }

    const handleSubmit = () => {
        onAdicionarQuadro();
        limparCampos()
    };

    return (
        <div>
            <h1>Adicionar Quadro</h1>
            <TextField
                label="Nome"
                value={nome}
                onChange={handleNome}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Adicionar Quadro
            </Button>
        </div>
    );
};

export default QuadroAdicionar