"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = require("./Livro");
const Biblioteca_1 = require("./Biblioteca");
function testarBiblioteca() {
    const biblioteca = new Biblioteca_1.Biblioteca();
    const livro1 = new Livro_1.Livro(1, 'O Senhor dos Anéis', 'J.R.R. Tolkien');
    const livro2 = new Livro_1.Livro(2, '1984', 'George Orwell');
    const livro3 = new Livro_1.Livro(3, 'O Alquimista', 'Paulo Coelho');
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);
    biblioteca.adicionarLivro(livro3);
    console.log(`Disponibilidade do livro 1: ${biblioteca.consultarDisponibilidade(1)}`);
    biblioteca.registrarEmprestimo(1);
    console.log(`Disponibilidade do livro 1: ${biblioteca.consultarDisponibilidade(1)}`);
    biblioteca.registrarEmprestimo(4);
    biblioteca.consultarDisponibilidade(4);
}
testarBiblioteca();
//# sourceMappingURL=main.js.map