import { Pet } from './animals/Pet.js';
import { Dog } from './animals/Dog.js';
import { Cat } from './animals/Cat.js';
import { Parrot } from './animals/Parrot.js';
import { Chicken } from './animals/Chicken.js';
import { Bird } from './animals/Bird.js';

const rikis = new Dog('Rikis', 'baltas');
rikis.sound();
rikis.introduce();

const rainis = new Cat('Rainis', 'juodas');
rainis.sound();
rainis.introduce();

const kapitonas = new Parrot('Kapitonas');
kapitonas.sound();
kapitonas.fly();
kapitonas.repeatSound('Duok sausainį!');
kapitonas.introduce();

const jack = new Parrot('Jack', 'juodas');
jack.sound();
jack.fly();
jack.repeatSound('Duokit romo arrr...!');
jack.introduce();

const cypsius = new Chicken('Cypsius', 'geltonas');
cypsius.fly();
cypsius.sound();
cypsius.introduce();

const pypsius = new Chicken('Pypsius');
pypsius.introduce();

const paukstukas = new Bird('Čiulbuonėlis', 'rudas');
paukstukas.sound();
paukstukas.fly();

const gyvunas = new Pet('Gražuolis', 'spalvotas');
console.log(gyvunas);