import { Biblioteca } from "./Biblioteca";
import { Livro } from "./livro";
function testarSistema() {
    // Criando instâncias de livros
    const livro1 = new Livro(1, "A Menina que Roubava Livros", "Markus Zusak");
    const livro2 = new Livro(2, "1984", "George Orwell");
    const livro3 = new Livro(3, "O Pequeno Príncipe", "Antoine de Saint-Exupéry");

    // Criando instância da Biblioteca
    const biblioteca = new Biblioteca();

    // Adicionando livros ao acervo
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);
    biblioteca.adicionarLivro(livro3);

    // Registrando um empréstimo
    biblioteca.registrarEmprestimo(2);

    // Consultando a disponibilidade de um livro
    console.log(`Disponibilidade do livro 2: ${biblioteca.consultarDisponibilidade(2)}`);
    console.log(`Disponibilidade do livro 3: ${biblioteca.consultarDisponibilidade(3)}`);
}

// Executando o teste
testarSistema();
