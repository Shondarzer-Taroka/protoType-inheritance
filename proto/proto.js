function Person(name,age) {
    this.age=age
    this.name=name
}

Person.prototype.greet=function() {
    return this.name , this.age
}

person1=new Person('hamid',8)

console.log(person1);