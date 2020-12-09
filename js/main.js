import { Dog } from './animals/Dog.js';
import { Cat } from './animals/Cat.js';

const rikis = new Dog('Rikis');
const rainis = new Cat('Rainis');

rikis.sound();
rainis.sound();

rikis.introduce();
rainis.introduce();