function $getElById(id) {
  return document.getElementById(id);

}
const $btn = $getElById('btn-kick');
let counter = 0;

const character = {
  name: 'Picachu',
  defaultHP: 200,
  damageHP: 200,
  currentDamage: null,
  elHP: $getElById('health-character'),
  elProgressBar: $getElById('progressbar-character'),
  renderHP,
  changeHP,
  renderHPLife,
  renderProgressBarHP
}

const enemy = {
  name: 'Charmander',
  defaultHP: 200,
  damageHP: 200,
  currentDamage: null,
  elHP: $getElById('health-enemy'),
  elProgressBar: $getElById('progressbar-enemy'),
  renderHP,
  changeHP,
  renderHPLife,
  renderProgressBarHP
}

$btn.addEventListener('click', function () {
  console.log('Kick');
  console.log(random(20))
  character.changeHP(random(20));
  enemy.changeHP(random(20));
});

function init() {
  console.log('Start Game!');
  character.renderHP();
  enemy.renderHP();
}

function changeHP(count) {
  this.damageHP -=count;
  this.currentDamage = count;

  const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
  console.log(log);
  putLogIntoDiv(log);
  
  if (this.damageHP < count) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл бой!');
    $btn.disabled = true;
  
  }

  this.renderHP();
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressBarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressBarHP() {
  this.elProgressBar.style.width = (this.damageHP / this.defaultHP) * 100 + '%';
}

function random(num) { 
  return Math.round(Math.random() * num);
}

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

function putLogIntoDiv(content) {
	// пример деструктуризации
	const { $p: $pCopy, $logs} = {$p: document.createElement('p'), $logs: document.querySelector('#logs')};
	//const $p = document.createElement('p');
	$pCopy.innerText = `${++counter} - ${content}`;
	//const $logs = document.querySelector('#logs');
	$logs.insertBefore($pCopy, logs.children[0]);
}

init();

