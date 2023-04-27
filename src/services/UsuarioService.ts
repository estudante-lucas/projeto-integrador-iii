import { Usuario as model } from "@/models/UsuarioModel";
import { UsuarioType } from "@/types/UsuarioType";

export async function encontrarTodos() {
    return await model.findAll();
}

export async function encontrarPorId(id: number) {
    return await model.findByPk(id);''
}

export async function salvar(usuario: UsuarioType) {
    if (ehNovoUsuario(usuario)) gerarSenhaAleatoria(usuario)
    return await model.create(usuario);
}

function ehNovoUsuario(usuario: UsuarioType) {
    return !usuario.id
}

function gerarSenhaAleatoria(usuario: UsuarioType) {
    usuario.senha = Math.round(Math.random() * 10^6).toString()
}