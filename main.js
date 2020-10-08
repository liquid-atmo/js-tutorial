import Pockemon from "./Pockemon.js"
import {random, counter, countBtn, $getElById, generateLog, randomInteger,
  getRandomPokemon, removeAllButtons} from "./utils.js";
import {pokemons} from './pokemons.js';

export function endOfGame () {
  removeAllButtons();
  const $btn = document.createElement('button');
  $btn.classList.add('button');
  $btn.innerText = 'Game Over. Restart?';
  $btn.addEventListener('click', () => {
    init()} );
  const $control = document.querySelector('.control');
  $control.appendChild($btn);
}


function init() {

  removeAllButtons();

  // random choice of pokemons
  const pikachu = getRandomPokemon(pokemons);
  // excludes first found pokemon from array to avoid same enemies
  let pokemonToExcludeIndex = pokemons.indexOf(pikachu);
  pokemons.splice(pokemonToExcludeIndex, 1);
  const charmander = getRandomPokemon(pokemons);

  let player1 = new Pockemon({
    ...pikachu,
    selectors: 'player1'
  });

  let player2 = new Pockemon({
    ...charmander,
    selectors: 'player2'
  });

  const $control = document.querySelector('.control');
  player1.attacks.forEach((item) => {
    // console.log(item);
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const btnCount = countBtn(item.maxCount, $btn);
    $btn.addEventListener('click', () => {
      btnCount();
      player2.changeHP(randomInteger(item.minDamage, item.maxDamage),
         console.log(generateLog(player2, player1)));
      // ответ соперника
      player1.changeHP(randomInteger(player1.attacks[0].minDamage, player1.attacks[0].maxDamage),
         console.log(generateLog(player1, player2)));
    });
    $control.appendChild($btn);
  });

  console.log('Start Game!');

  player1.renderHP();
  player2.renderHP();
}



init();
