class singleDog {
    constructor(vardas, spalva, veisle) {
        console.log(vardas);
        this.name = vardas;
        this.color = spalva;
        this.breed = veisle;
        this.speed = 0;
        this.isRuning = false;
        this.isSitting = true;
        this.lovedPeople = [];
        

    }
    introduce() {
        console.log(`Labas, as esu ${this.name} (${this.breed}) ir mano kailis yra ${this.color}.`);
    }
    move (speedChange) {
        this.speed += speedChange;
        console.log(this.name, '->',this.speed);
    }
    addLovedPerson(personName) {
        this.lovedPeople.push(personName);
    }
}

export { singleDog }