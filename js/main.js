import { Pet } from './animals/Pet.js';
import { Dog } from './animals/Dog.js';
//import { Cat } from './animals/Cat.js';

const rikis = new Dog('Rikis', 'baltas');
//const rainis = new Cat('Rainis', 'juodas');

rikis.sound();
//rainis.sound();

rikis.introduce();
//rainis.introduce();

const gyvunas = new Pet('Gražuolis', 'spalvotas');
console.log(gyvunas);