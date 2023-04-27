import { Quadro as model } from "@/models/QuadroModel";
import QuadroType from "@/types/QuadroType";

export async function encontrarTodos() {
    return await model.findAll();
}

export async function encontrarPorId(id: number) {
    return await model.findByPk(id);
}

export async function salvar(quadro: QuadroType) {
    quadro.criadoPor = 2
    return await model.create(quadro);
}