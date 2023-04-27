import { post } from '@/services/FecthService';
import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface UsuarioAdicionarProps {
    onSucess: () => void
}

const UsuarioAdicionar = ({onSucess}: UsuarioAdicionarProps) => {
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleNome = (e: any) => {
        setNome(e.target.value);
    };

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const onAdicionarUsuario = async () => {
        post("usuario", {
            nome,
            email
        }).then(async (usuario) => {
            onSucess()
        })
    }

    const limparCampos = () => {
        setNome('');
        setEmail('');
    }

    const handleSubmit = () => {
        onAdicionarUsuario();
        limparCampos()
    };

    return (
        <div>
            <h2>Adicionar Usuário</h2>
            <TextField
                label="Nome"
                value={nome}
                onChange={handleNome}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={handleEmail}
                fullWidth
                margin="normal"
                type='email'
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Adicionar Usuário
            </Button>
        </div>
    );
};

export default UsuarioAdicionar