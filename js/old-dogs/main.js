import { singleDog } from './singleDog.js';

const rexius = new singleDog('Rexas', 'rudas', 'Vokiečių aviganis');

const brisius = new singleDog('Brisius', 'pilkas', 'Lietuvos lenciūginis');

console.log(rexius);
console.log(brisius);
console.log(rexius.breed);
console.log(brisius.breed);

rexius.introduce();
brisius.introduce();

rexius.addLovedPerson('Zymantas');
rexius.addLovedPerson('Andejaus');
console.log(rexius.lovedPeople);
/*
Gyvunai kaip objektai:
-turi:
    -varda
    -spalva
    -veisle
    -judejimo greiti = 0
-gali:
    - prisistatyti
    - isleisti garsa
    - judeti

*/
