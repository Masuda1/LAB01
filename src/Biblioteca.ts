// Classe Biblioteca
import { Livro } from "./livro";
export class Biblioteca {
    private acervo: Livro[] = [];

    // Método para adicionar um novo livro ao acervo
    adicionarLivro(livro: Livro): void {
        this.acervo.push(livro);
        console.log(`Livro cadastrado com Sucesso: ${livro.codigo} - ${livro.titulo} (${livro.autor})`);
    }

    // Método para registrar empréstimo de um livro
    registrarEmprestimo(codigo: number): void {
        const livro = this.acervo.find(l => l.codigo === codigo);
        if (livro && livro.disponivel) {
            livro.disponivel = false;
            console.log(`Empréstimo registrado para o livro: ${livro.titulo}`);
        } else {
            console.error("Livro não disponível para empréstimo ou inexistente.");
        }
    }

    // Método para consultar a disponibilidade de um livro
    consultarDisponibilidade(codigo: number): boolean {
        const livro = this.acervo.find(l => l.codigo === codigo);
        if (livro) {
            return livro.disponivel;
        } else {
            console.error("Livro não encontrado no acervo.");
            return false;
        }
    }
}

