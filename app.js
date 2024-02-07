class Animal{
    constructor(name,sound){
        this.name=name
        this.sound=sound
    }
}

class Dog extends Animal{
    sayTypeofanimal(){
        return `${this.name} -${this.sound}`
    }
}
const result = new Dog("German Shepred", "Woof")
console.log(result.sayTypeofanimal());