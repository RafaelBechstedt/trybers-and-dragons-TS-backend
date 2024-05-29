# RPG Game Project

## Descrição
Este projeto implementa uma estrutura de jogos RPG (Role Playing Game) aplicando os princípios da arquitetura SOLID e os princípios de Programação Orientada a Objetos (POO). 

## Funcionalidades
1. **Classe Race**
   - Define a base para todas as raças no jogo.

2. **Classes Derivadas de Race**
   - Implementa diversas raças específicas herdando de `Race`.

3. **Interface Energy**
   - Define a estrutura para a energia usada pelos personagens.

4. **Classe Archetype**
   - Define a base para todos os arquétipos no jogo.

5. **Classes Derivadas de Archetype**
   - Implementa diversos arquétipos específicos herdando de `Archetype`.

6. **Interface Fighter**
   - Define a estrutura para os lutadores no jogo.

7. **Classe Character**
   - Implementa um personagem com base nas interfaces e classes definidas.

8. **Interface SimpleFighter**
   - Define uma estrutura simplificada para lutadores.

9. **Classe Monster**
   - Implementa um monstro que os personagens podem enfrentar.

10. **Classe PVP**
    - Implementa a lógica de combate jogador vs jogador.

## Configuração e Execução

### Pré-requisitos
- Node.js
- npm

### Passos para rodar o projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/usuario/rpg-game.git
   cd rpg-game

2. Instale as dependências:
   ```sh
   npm install

3. Execute o projeto:
   ````sh
   npm start
