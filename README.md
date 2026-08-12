# 📝 TaskFlow

O **TaskFlow** é uma aplicação web interativa de gestão de tarefas (*To-Do List*) desenvolvida com foco na Experiência do Utilizador (UX) e em boas práticas de programação Front-End. 

Este projeto foi construído para colocar em prática conceitos avançados de manipulação de DOM, gestão de estado (State-Driven UI) e persistência de dados no navegador.

## ✨ Funcionalidades

- **Adicionar Tarefas:** Criação rápida de novas tarefas (suporte para tecla `Enter`).
- **Marcar como Concluída:** Alternância de estado (Feito / Não Feito) com um simples clique.
- **Remover Tarefas:** Exclusão de itens da lista.
- **Filtros Dinâmicos:** Visualização segmentada entre "Todas", "Pendentes" e "Concluídas".
- **Persistência de Dados:** As tarefas são guardadas automaticamente no `LocalStorage` do navegador, não se perdendo ao fechar ou recarregar a página.

## 🛠️ Tecnologias e Conceitos Utilizados

- **HTML5:** Semântica e estruturação acessível.
- **CSS3:** Estilização moderna, Flexbox, transições suaves e responsividade.
- **JavaScript (ES6+):**
  - Manipulação dinâmica do DOM.
  - Event Listeners (Eventos de clique e teclado).
  - Métodos de Array (`.map()`, `.filter()`, `.forEach()`).
  - Arquitetura State-Driven (Interface guiada por estado).
  - JSON (`JSON.stringify` e `JSON.parse`).
  - API de `LocalStorage`.

## 📸 Capturas de Ecrã (Screenshots)

**Visão Geral das Tarefas:**
![Ecrã Principal do TaskFlow](screenshots/pagina-de-concluidos.png)

**Filtro de Tarefas a funcionar:**
![Ecrã com Filtros Ativos](screenshots/pagina-de-pendentes.png)

## 🚀 Como executar o projeto

Como o projeto é estático (apenas Front-End), executá-lo é extremamente simples:

1. Faça o clone deste repositório:
   git clone https://github.com/souzadennis17/TaskFlow.git

2. Abra a pasta do projeto.
3. Dê um duplo clique no ficheiro `index.html` para abri-lo no seu navegador.

## 👨‍💻 Autor

- **Dennis Souza**
- GitHub: https://github.com/souzadennis17