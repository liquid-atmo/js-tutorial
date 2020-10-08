import Pockemon from "./Pockemon.js"
import {random, counter} from "./utils.js";

const player1 = new Pockemon({
  name: 'Picachu',
  type: 'electric',
  hp: 200,
  selectors: 'character'
});

const player2 = new Pockemon({
  name: 'Charmander',
  type: 'water',
  hp: 200,
  selectors: 'enemy'
});

console.log(player1);
console.log(player2);

let logCounter = counter();

function $getElById(id) {
  return document.getElementById(id);

}
const $btn1 = $getElById('btn-kick');
const $btn2 = $getElById('btn-punch');


$btn1.addEventListener('click', function () {
  console.log('Kick');
  console.log(random(30));
  player1.changeHP(random(30), function (count) {
  	console.log(generateLog(player1, player2));
  });
  player2.changeHP(random(30), function (count) {
  	console.log(generateLog(player1, player2));
  });
});

$btn2.addEventListener('click', function () {
  console.log('Punch!');
  console.log(random(50))
  player1.changeHP(random(50), function (count) {
  	console.log(generateLog(player1, player2));
  });
  player2.changeHP(random(50), function (count) {
  	console.log(generateLog(player1, player2));
  });
});

const countClicks = (selector) => {
  let counter = 0;
  let maxClicks = 6;
  return () => {
    if (counter === maxClicks - 1) {
      let $btn = document.querySelector(selector);;
      $btn.disabled = true;
    }
    console.log(` Ты кликнул ${++counter} раз`);
    putCountdown(maxClicks, counter, selector + ' span#countdown');
  }
}

$btn1.addEventListener('click', countClicks('#btn-kick') );
$btn2.addEventListener('click', countClicks('#btn-punch') );

function init() {
  console.log('Start Game!');
  player1.renderHP();
  player2.renderHP();
}

// function changeHP(count) {
//   this.damageHP -=count;
//   this.currentDamage = count;

//   const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
//   console.log(log);
//   putLogIntoDiv(log, '#logs');
  
//   if (this.damageHP < count) {
//     this.damageHP = 0;
//     alert('Бедный ' + this.name + ' проиграл бой!');
//     $btn1.disabled = true;
//     $btn2.disabled = true;

  
//   }

//   this.renderHP();
// }



function generateLog(firstPerson, secondPerson) {
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.-${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${firstPerson.currentDamage} [${firstPerson.damageHP} / ${firstPerson.defaultHP}]`
  ];
  return logs[random(logs.length - 1)]
}


function putLogIntoDiv(content, selector) {
	const $p = document.createElement('p');
	$p.innerText = `${logCounter()}. - ${content}`;
	const $logs = document.querySelector(selector);
	$logs.insertBefore($p, logs.children[0]);
}

function putCountdown (maxClicks, currentCounter, selector) {
	const $p = document.createElement('p');
	$p.innerText = `${maxClicks - currentCounter}`;
	const $countdown = document.querySelector(selector);
	$countdown.insertBefore($p, $countdown.children[0]);
	!!$countdown.children[1] && $countdown.children[1].remove();
}


init();

