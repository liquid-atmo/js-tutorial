import {endOfGame} from './main.js';

class Selectors {
	constructor(name) {
	this.elHP = document.getElementById(`health-${name}`);
	this.elProgressBar = document.getElementById(`progressbar-${name}`);
  this.elImg = document.getElementById(`img-${name}`);
	this.elName = document.getElementById(`name-${name}`);
	}
}


class Pockemon extends Selectors {
	constructor ({ name, hp, type, img, selectors, attacks}) {
        super(selectors);
        this.name = name;
        this.defaultHP = hp;
        this.damageHP = hp;
        this.currentDamage = 0;
        this.type = type;
				this.img = img;
				this.attacks = attacks;
        this.renderHP();
				this.renderImg();
				this.renderName();
	}

	renderHP = () => {
      this.renderHPLife();
      this.renderProgressBarHP();
    }


    renderHPLife = () => {
      this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    }

    renderProgressBarHP = () => {
      this.elProgressBar.style.width = (this.damageHP / this.defaultHP) * 100 + '%';
    }

		renderImg = () => {
			this.elImg.src = this.img;
		}

		renderName = () => {
			this.elName.innerText = this.name;
		}

    changeHP = (count, cb) => {
      this.damageHP -=count;
      this.currentDamage = count;

      if (this.damageHP < count) {
        this.damageHP = 0;
				// вызвать функцию конца игры ()
				// ('Бедный ' + this.name + ' проиграл бой!')"
				// пригласить играть заново
        alert('Бедный ' + this.name + ' проиграл бой!');
				endOfGame();



      }
      this.renderHP();
      !!cb && cb(count);

    }


}

export default Pockemon;
