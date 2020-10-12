import Pockemon from "./Pockemon.js"
import {random, counter, countBtn, $getElById, generateLog, randomInteger,
  getRandomPokemon, removeAllButtons, setLevel, setColorHPProgressbar} from "./utils.js";

class Game {

  getPokemons = async () => {
    const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
    const body = await response.json();
    return body;
  }

  start = async () => {
    const pokemons = await this.getPokemons();
    removeAllButtons();
    setLevel(1);

    // random choice of pokemons
    let p1 = getRandomPokemon(pokemons);
    console.log(p1);
    // excludes first found pokemon from array to avoid same enemies
    let pokemonToExcludeIndex = pokemons.indexOf(p1);
    pokemons.splice(pokemonToExcludeIndex, 1);
    let p2 = getRandomPokemon(pokemons);

    let player1 = new Pockemon({
      ...p1,
      selectors: 'player1'
    });
    setColorHPProgressbar(player1);
    let player2 = new Pockemon({
      ...p2,
      selectors: 'player2'
    });
    setColorHPProgressbar(player2);

    const $control = document.querySelector('.control');
    player1.attacks.forEach((item) => {
      // console.log(item);
      const $btn = document.createElement('button');
      $btn.classList.add('button');
      $btn.innerText = item.name;
      const btnCount = countBtn(item.maxCount, $btn);
      const levelCount = counter(1);
      $btn.addEventListener('click', () => {
        btnCount();
        let q = this.fight(player1.id, item.id, player2.id);
        q.then(data => {
          player1.changeHP(data.kick.player1);
          setColorHPProgressbar(player1);
          player2.changeHP(data.kick.player2);
          setColorHPProgressbar(player2);
        }).then(() => {
          // choosing next opponent
          if (player2.damageHP ===0
          && !(player1.damageHP ===0)) {
            p2 = getRandomPokemon(pokemons);
            player2 = new Pockemon({
            ...p2,
            selectors: 'player2'
            });
            setColorHPProgressbar(player2);
            // increase level counter
            setLevel(levelCount());
          }
          if (player1.damageHP ===0) {
            this.endOfGame();
          }
        });
      });
      $control.appendChild($btn);
    });

    console.log('Start Game!');
    player1.renderHP();
    player2.renderHP();
  }

  endOfGame = () => {
    removeAllButtons();
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = 'Game Over. Restart?';
    $btn.addEventListener('click', () => {
      this.start();
    });
    const $control = document.querySelector('.control');
    $control.appendChild($btn);
  }

  fight = async (player1Id, player1AttackId, player2Id) => {
    const response = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1Id}&attackId=${player1AttackId}&player2id=${player2Id}`);
    const body = await response.json();
    console.log(body)
    return body;
  }
}

const game = new Game();
game.start();
