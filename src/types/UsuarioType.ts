import { AtributosComunsType } from "@/utils/sequelize";

export interface UsuarioType extends AtributosComunsType {
    nome: string,
    email: string,
    senha: string,
}