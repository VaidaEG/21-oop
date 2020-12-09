class Cat {
    constructor(name) {
        this.name = name;
        this.fur = 'pilkas';
    }
    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailis yra ${this.fur} spalvos.`);
    }
    sound() {
        console.log(`${this.name}: Miau miau!`);
    }
}

export { Cat }