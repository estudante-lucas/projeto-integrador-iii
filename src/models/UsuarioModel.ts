import { AtributosComunsModelo, define } from "@/utils/sequelize";
import { DataTypes } from "sequelize";

interface UsuarioModel extends AtributosComunsModelo {
  nome: string,
  email: string,
  senha: string,
}

const Usuario = define<UsuarioModel>('Usuario', {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING(100),  
    allowNull: false,
  },
});

export { Usuario };
export type { UsuarioModel };

