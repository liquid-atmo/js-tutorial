const $btn = document.getElementById('btn-kick');

const character = {
  name: 'Picachu',
  defaultHP: 200,
  damageHP: 200,
  elHP: document.getElementById('health-character'),
  elProgressBar: document.getElementById('progressbar-character'),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP
}

const enemy = {
  name: 'Charmander',
  defaultHP: 200,
  damageHP: 200,
  elHP: document.getElementById('health-enemy'),
  elProgressBar: document.getElementById('progressbar-enemy'),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP
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
  if (this.damageHP < count) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл бой!');
    $btn.disabled = true;
  
  } else {
    this.damageHP -=count;  
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
  return Math.ceil(Math.random() * num);
}

init();

