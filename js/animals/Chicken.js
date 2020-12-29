import { Bird } from './Bird.js';

class Chicken extends Bird {
    constructor(name, color) {
        super(name, color);
        this.voice = 'Cip cip 🐤';
        this.canFly = false;
    }
}

export { Chicken }