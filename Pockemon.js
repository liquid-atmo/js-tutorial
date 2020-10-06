class Selectors {
	constructor(name) {
	this.elHP = document.getElementById(`health-${name}`);
	this.elProgressBar = document.getElementById(`progressbar-${name}`);

	}
}


class Pockemon extends Selectors {
	constructor ({ name, hp, type, selectors}) {
        super(selectors);
        this.name = name;
        this.defaultHP = hp;
        this.damageHP = hp;
        this.currentDamage = 0;
        this.type = type;
        this.renderHP();
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

    changeHP = (count, cb) => {
      this.damageHP -=count;
      this.currentDamage = count;
  
      if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой!');
              }
      this.renderHP();
      !!cb && cb(count);
  
    }


}

export default Pockemon;
