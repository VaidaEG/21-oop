import { Bird } from './Bird.js';

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        this.color = color || 'margaspalvis';
        this.voice = 'Macaw macaw! 🦜';
    }
    repeatSound(sound) {
        console.log(`${this.name} repeats the sound ${sound}`);
    }
}

export { Parrot }