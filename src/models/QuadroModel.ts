import { AtributosComunsModel, define } from "@/utils/sequelize";
import { DataTypes } from "sequelize";

interface QuadroModel extends AtributosComunsModel {
  nome: string,
}

const Quadro = define<QuadroModel>('Quadro', {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
});

export { Quadro };
export type { QuadroModel };

