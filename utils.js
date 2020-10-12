
export function random(num) {
  return Math.round(Math.random() * num);
}

export function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


export const counter = (cnt = 0) => {
	return () => {return ++cnt;}
};

export function countBtn (count = 6, el) {
  const innerText = el.innerText;
  el.innerText = `${innerText} (${count})`;
  return function () {
    count--;
    if (count ===0) {
      el.disabled = true;
    }
    el.innerText = `${innerText} (${count})`;
    return count;
  }
}

export function generateLog(firstPerson, secondPerson) {
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

export function $getElById(id) {
  return document.getElementById(id);
}

export function getRandomPokemon (pokemons) {
  const pokemon = pokemons[randomInteger(0, pokemons.length - 1)];
  return pokemon;
}

export function removeAllButtons() {
  let $allBtn = document.querySelectorAll(".control .button");
  $allBtn.forEach((item) => {
    item.remove();
  });
}

export function setLevel (count) {
  let $levelEl = document.querySelectorAll('.lvl');
  console.log($levelEl);
  $levelEl.forEach((item) => {
    item.innerText = `Lv. ${count}`;
      });

}

export function setColorHPProgressbar (player) {
  player.elProgressBar.classList.toggle('low', false);
  player.elProgressBar.classList.toggle('critical', false);
  if (player.damageHP < 100 && player.damageHP > 40) {
    player.elProgressBar.classList.add('low');
  }

  if (player.damageHP <= 40) {
    player.elProgressBar.classList.add('critical');
  }

}
