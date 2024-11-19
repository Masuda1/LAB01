import { Livro } from './Livro';
import { Biblioteca } from './Biblioteca';

// Função para testar o sistema
function testarBiblioteca(): void {
  const biblioteca = new Biblioteca();

  // Cadastrar livros
  const livro1 = new Livro(1, 'O Senhor dos Anéis', 'J.R.R. Tolkien');
  const livro2 = new Livro(2, '1984', 'George Orwell');
  const livro3 = new Livro(3, 'O Alquimista', 'Paulo Coelho');

  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);
  biblioteca.adicionarLivro(livro3);

  // Consultar disponibilidade antes do empréstimo
  console.log(`Disponibilidade do livro 1: ${biblioteca.consultarDisponibilidade(1)}`);

  // Registrar empréstimo
  biblioteca.registrarEmprestimo(1);

  // Consultar disponibilidade após o empréstimo
  console.log(`Disponibilidade do livro 1: ${biblioteca.consultarDisponibilidade(1)}`);

  // Testar erro ao tentar registrar um empréstimo de um livro inexistente
  biblioteca.registrarEmprestimo(4);

  // Testar erro ao consultar um livro inexistente
  biblioteca.consultarDisponibilidade(4);
}

testarBiblioteca();
