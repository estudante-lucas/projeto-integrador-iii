import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

interface BotaoAdicionarProps {
    onClick: () => void
}

const BotaoAdicionar = ({ onClick }: BotaoAdicionarProps) => {
  return (
    <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={onClick}>
      Adicionar
    </Button>
  );
};

export default BotaoAdicionar