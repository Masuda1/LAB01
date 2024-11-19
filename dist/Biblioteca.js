"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.acervo = [];
    }
    adicionarLivro(livro) {
        this.acervo.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado ao acervo.`);
    }
    registrarEmprestimo(codigo) {
        const livro = this.acervo.find(l => l.codigo === codigo);
        if (!livro) {
            console.error(`Livro com código ${codigo} não encontrado.`);
            return;
        }
        if (!livro.disponivel) {
            console.warn(`Livro "${livro.titulo}" já está indisponível.`);
            return;
        }
        livro.disponivel = false;
        console.log(`Empréstimo do livro "${livro.titulo}" registrado com sucesso.`);
    }
    consultarDisponibilidade(codigo) {
        const livro = this.acervo.find(l => l.codigo === codigo);
        if (!livro) {
            console.error(`Livro com código ${codigo} não encontrado.`);
            return false;
        }
        return livro.disponivel;
    }
}
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=Biblioteca.js.map