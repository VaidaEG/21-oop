class Dog {
    constructor(name) {
        this.name = name;
        this.fur = 'rudas';
    }
    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailis yra ${this.fur} spalvos.`);
    }
    sound() {
        console.log(`${this.name}: Au au!`);
    }
}

export { Dog }