import dotenv from 'dotenv';
import { DataTypes, InferAttributes, InferCreationAttributes, Model, ModelAttributes, ModelOptions, Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE!, process.env.DB_USER!, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

interface AtributosComunsType extends Object {
  id: number;
  criadoPor: string;
  atualizadoPor: string;
  criadoEm: Date,
  atualizadoEm: Date,
  apagadoEm: Date,
}

interface AtributosComunsModelo extends Model<InferAttributes<AtributosComunsModelo>, InferCreationAttributes<AtributosComunsModelo>> {
  id: number;
  criadoPor: string;
  atualizadoPor: string;
  criadoEm: Date,
  atualizadoEm: Date,
  apagadoEm: Date,
}

const atributosComuns: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  criadoPor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  atualizadoPor: {
    type: DataTypes.STRING,
    allowNull: true
  },
};

const define = <T extends AtributosComunsModelo>(modelName: string, fields: ModelAttributes, options?:  ModelOptions) => {
  const modelOptions: ModelOptions = {
    ...options,
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm',
    deletedAt: 'apagadoEm',
    paranoid: true,
    underscored: true,
  };

  const modelFields: ModelAttributes = {
    ...atributosComuns,
    ...fields,
  };

  return sequelize.define<T>(modelName, modelFields, modelOptions);
}

export {
  sequelize,
  define,
};
export type {
  AtributosComunsModelo,
  AtributosComunsType
};


