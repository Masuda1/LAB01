#LAB01
# Sistema de Gerenciamento de Biblioteca

## Descrição
Este é um sistema simples de gerenciamento de biblioteca desenvolvido em **TypeScript**. Ele permite que bibliotecários:
- Cadastrem novos livros no acervo.
- Registrem empréstimos de livros para usuários.
- Consultem a disponibilidade de livros específicos.

O projeto foi desenvolvido como um exercício para praticar conceitos de programação orientada a objetos e tipagem estática em TypeScript.

---

## Funcionalidades
1. **Cadastro de Livros**  
   Adiciona novos livros ao acervo da biblioteca.
2. **Registro de Empréstimos**  
   Marca um livro como indisponível ao emprestá-lo.
3. **Consulta de Disponibilidade**  
   Verifica se um livro está disponível para empréstimo.

---

## Estrutura do Código
### Classes Principais
- **Livro**
  - Propriedades:
    - `codigo` (number): Identificador único do livro.
    - `titulo` (string): Título do livro.
    - `autor` (string): Autor do livro.
    - `disponivel` (boolean): Indica se o livro está disponível.
  - Construtor: Inicializa todas as propriedades.

- **Biblioteca**
  - Propriedade privada:
    - `acervo` (Livro[]): Lista de livros na biblioteca.
  - Métodos:
    - `adicionarLivro(livro: Livro): void`  
      Adiciona um novo livro ao acervo.
    - `registrarEmprestimo(codigo: number): void`  
      Marca o livro como indisponível.
    - `consultarDisponibilidade(codigo: number): boolean`  
      Retorna `true` se o livro estiver disponível, ou `false` caso contrário.

---

## Requisitos Técnicos
- **Linguagem:** TypeScript
- **Conceitos Aplicados:**
  - Classes e encapsulamento.
  - Modificadores de acesso (`public`, `private`).
  - Tipagem estática explícita.
- **Tratamento de Erros:**  
  Erros, como tentativa de consultar ou emprestar livros inexistentes, são tratados adequadamente.

---

## Como Executar
1. **Pré-requisitos**  
   - Node.js e npm instalados.
   - TypeScript configurado no ambiente.
2. **Instalação**
   Clone este repositório e instale as dependências:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO>
   npm install
Compilar o Código Compile o código TypeScript para JavaScript:
bash
Copiar código
npx tsc
Executar o Programa Execute o programa compilado:
bash
Copiar código
node dist/index.js
Testes Realizados
O sistema foi testado com as seguintes ações:

Cadastro de Livros
Foram criados e adicionados três livros ao acervo usando o método adicionarLivro.
Registro de Empréstimos
Um dos livros foi emprestado, alterando sua disponibilidade.
Consulta de Disponibilidade
Verificou-se a disponibilidade de livros existentes e inexistentes, imprimindo os resultados no console.
Exemplos de Uso
Cadastro de um novo livro:
typescript
Copiar código
const livro1 = new Livro(1, "O Hobbit", "J.R.R. Tolkien", true);
biblioteca.adicionarLivro(livro1);
Registro de empréstimo:
typescript
Copiar código
biblioteca.registrarEmprestimo(1);
Consulta de disponibilidade:
typescript
Copiar código
const disponivel = biblioteca.consultarDisponibilidade(1);
console.log(`Disponibilidade: ${disponivel ? "Sim" : "Não"}`);
Objetivos de Aprendizado
Este projeto foi desenvolvido para:

Praticar a definição e uso de classes em TypeScript.
Aplicar conceitos de encapsulamento e tipagem estática.
Simular cenários reais de gerenciamento de uma biblioteca.
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Licença
Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.
